import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface FigmaEmbedProps {
  url: string;
  height?: number;
}

export default function FigmaEmbed({ url, height = 450 }: FigmaEmbedProps) {
  return (
    <BrowserOnly fallback={<div style={{ height, background: '#f5f5f5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Figma embed...</div>}>
      {() => (
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
          width="100%"
          height={height}
          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`}
          allowFullScreen
        />
      )}
    </BrowserOnly>
  );
}
