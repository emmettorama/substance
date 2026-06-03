import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface StorybookEmbedProps {
  storyId: string;
  height?: number;
}

export default function StorybookEmbed({ storyId, height = 500 }: StorybookEmbedProps) {
  return (
    <BrowserOnly fallback={<div style={{ height, background: '#f5f5f5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Storybook embed...</div>}>
      {() => (
        <iframe
          src={`/substance/storybook/iframe.html?id=${storyId}&viewMode=story`}
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
          width="100%"
          height={height}
        />
      )}
    </BrowserOnly>
  );
}
