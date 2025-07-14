"use client";

import React from "react";

export default function OpenInNewTabButton({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <button
      onClick={() => window.open(url, '_blank')}
      className="text-blue-700 hover:underline break-all font-medium bg-transparent border-none p-0 cursor-pointer"
      type="button"
    >
      {children}
    </button>
  );
} 