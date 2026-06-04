import React from 'react';

interface StorybookEmbedProps {
  storyId: string;
  height?: number;
}

export default function StorybookEmbed({ storyId, height = 500 }: StorybookEmbedProps) {
  return (
    <iframe
      src={`/substance/storybook/iframe.html?id=${storyId}&viewMode=story`}
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
      width="100%"
      height={height}
      loading="lazy"
    />
  );
}
