import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Romanov Vasiliy',
    short_name: 'Romnvs',
    icons: [
      {
        src: '/public/favicon/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/public/favicon/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
