"use client";

import React from "react";

export default function ResourceLink({ abbr, url }: { abbr: string; url: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };
  
  return (
    <a
      href={url}
      onClick={handleClick}
      className="text-blue-700 hover:underline break-all font-medium cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      {url}
    </a>
  );
} 