-- Minimal schema for TechPulse articles
-- ============================================
-- TechPulse schema (articles, tools, indexes, functions, triggers, RLS)
-- ============================================

create extension if not exists pgcrypto;
create extension if not exists uuid-ossp;

-- ============================================
-- TABLES
-- ============================================

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  content text not null,
  category text not null,
  author text default 'TechPulse Team',
  image_url text,
  source_name text,
  source_url text,
  source_id text,
  seo_keywords text[],
  meta_description text,
  view_count integer default 0,
  share_count integer default 0,
  is_published boolean default true,
  is_featured boolean default false,
  published_date timestamptz default now(),
  updated_at timestamptz default now(),
  created_at timestamptz default now()
);

create table if not exists public.tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  tagline text,
  description text,
  website text,
  thumbnail_url text,
  category text,
  pricing text,
  features jsonb,
  votes_count integer default 0,
  stars_count integer default 0,
  source text default 'producthunt',
  source_id text,
  source_url text,
  featured boolean default false,
  processed boolean default false,
  created_at timestamptz default now()
);

-- ============================================
-- INDEXES
-- ============================================

create index if not exists idx_articles_slug on public.articles (slug);
create index if not exists idx_articles_category on public.articles (category);
create index if not exists idx_articles_published_date on public.articles (published_date desc);
create index if not exists idx_articles_is_published on public.articles (is_published);
create index if not exists idx_articles_source on public.articles (source_name);

create index if not exists idx_tools_source on public.tools (source);
create index if not exists idx_tools_processed on public.tools (processed);
create index if not exists idx_tools_featured on public.tools (featured);

-- ============================================
-- FUNCTIONS
-- ============================================

create or replace function public.generate_slug_from_title()
returns trigger as $$
begin
  if new.slug is null or new.slug = '' then
    new.slug := lower(regexp_replace(new.title, '[^a-zA-Z0-9]+', '-', 'g'));
    new.slug := trim(both '-' from new.slug);
    new.slug := substring(new.slug from 1 for 100);
  end if;
  return new;
end;
$$ language plpgsql;

create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- ============================================
-- TRIGGERS
-- ============================================

do $$ begin
  if not exists (
    select 1 from pg_trigger where tgname = 'auto_slug_articles'
  ) then
    create trigger auto_slug_articles
      before insert or update on public.articles
      for each row execute function public.generate_slug_from_title();
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_trigger where tgname = 'auto_updated_at_articles'
  ) then
    create trigger auto_updated_at_articles
      before update on public.articles
      for each row execute function public.update_updated_at();
  end if;
end $$;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

alter table public.articles enable row level security;
alter table public.tools enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies where policyname = 'Public articles are viewable by everyone'
  ) then
    create policy "Public articles are viewable by everyone"
      on public.articles for select
      using (is_published = true);
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies where policyname = 'Tools are viewable by everyone'
  ) then
    create policy "Tools are viewable by everyone"
      on public.tools for select using (true);
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies where policyname = 'Service role has full access to articles'
  ) then
    create policy "Service role has full access to articles"
      on public.articles for all using (auth.role() = 'service_role');
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies where policyname = 'Service role has full access to tools'
  ) then
    create policy "Service role has full access to tools"
      on public.tools for all using (auth.role() = 'service_role');
  end if;
end $$;
