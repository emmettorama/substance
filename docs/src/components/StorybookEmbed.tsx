import React from 'react';

interface StorybookEmbedProps {
  storyId: string;
  height?: number;
}

export default function StorybookEmbed({ storyId, height = 500 }: StorybookEmbedProps) {
  // Storybook 10 iframe.html has known issues with viewMode detection.
  // Using index.html with path-based routing is more reliable for embeds.
  const src = `/substance/storybook/index.html?path=/story/${encodeURIComponent(storyId)}`;
  return (
    <iframe
      src={src}
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
      width="100%"
      height={height}
      loading="lazy"
    />
  );
}
