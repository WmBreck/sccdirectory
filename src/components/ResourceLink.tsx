"use client";

import React from "react";

export default function ResourceLink({ url }: { abbr: string; url: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  const isDownloadable = url.match(/\.(pdf|docx?|rtf)$/i);

  return (
    <div className="flex items-center gap-2">
      <a
        href={url}
        onClick={handleClick}
        className="text-blue-700 hover:underline break-all font-medium cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
      {isDownloadable && (
        <a
          href={url}
          download
          className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs font-semibold"
        >
          Download
        </a>
      )}
    </div>
  );
} 