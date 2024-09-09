import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Najma Host',
  description: 'خيارك الاول في الاستضافة',
  metadataBase: new URL('https://najma.cloud'), // Set the base URL here
  openGraph: {
    title: 'Najma Host',
    description: 'خيارك الاول في الاستضافة',
    url: 'https://najma.cloud',
    siteName: 'Najma Host',
    images: [
      {
        url: '/thumb.png', // Relative path; will be resolved to 'https://najma.cloud/thumb.png'
        width: 1200,
        height: 630,
        alt: 'Najma Host Thumbnail',
      },
      {
        url: '/67133283063.jpg', // Relative path; will be resolved to 'https://najma.cloud/67133283063.jpg'
        width: 600,
        height: 315,
        alt: 'Najma Host Large Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najma Host',
    description: 'خيارك الاول في الاستضافة',
    images: [
      {
        url: '/67133283063.jpg', // Relative path; will be resolved to 'https://najma.cloud/67133283063.jpg'
        alt: 'Najma Host Large Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Primary Large Image */}
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Thumbnail Image */}
        <meta property="og:image" content={metadata.openGraph.images[1].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[1].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[1].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[1].alt} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        <meta name="twitter:image:alt" content={metadata.twitter.images[0].alt} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
