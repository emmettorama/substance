import React from 'react';

interface StorybookEmbedProps {
  storyId: string;
  height?: number;
}

export default function StorybookEmbed({ storyId, height = 500 }: StorybookEmbedProps) {
  const src = `/substance/storybook/iframe.html?id=${encodeURIComponent(storyId)}`;
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
