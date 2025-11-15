"use client";

import { useEffect, useRef } from "react";

type AdSlotProps = {
  keyId: string;
  width: number;
  height: number;
  className?: string;
};

export default function AdSlot({ keyId, width, height, className }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    container.innerHTML = "";

    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.innerHTML = `atOptions = { 'key': '${keyId}', 'format': 'iframe', 'height': ${height}, 'width': ${width}, 'params': {} };`;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = `https://www.highperformanceformat.com/${keyId}/invoke.js`;
    invokeScript.async = true;

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);

    return () => {
      container.innerHTML = "";
    };
  }, [keyId, width, height]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: height, display: "flex", alignItems: "center", justifyContent: "center" }}
    />
  );
}
