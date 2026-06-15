import React from 'react';

interface StorybookEmbedProps {
  storyId: string;
  height?: number;
}

export default function StorybookEmbed({ storyId, height = 500 }: StorybookEmbedProps) {
  // iframe.html is Storybook's official embed target — strips chrome, shows story only.
  // viewMode=story ensures we get the interactive story, not the Docs page.
  const src = `/substance/storybook/iframe.html?id=${encodeURIComponent(storyId)}&viewMode=story`;
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
