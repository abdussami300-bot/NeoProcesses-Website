import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  metadataBase: new URL('https://neoprocesses-website.vercel.app'),
  title: {
    default: 'NeoProcesses | Custom Software. Built Around Your Business.',
    template: '%s | NeoProcesses',
  },
  description:
    'NeoProcesses designs and develops websites, cross-platform mobile applications, POS billing systems, and custom software that help businesses modernize operations. Serving Pakistan, Saudi Arabia, and international clients.',
  keywords: [
    'NeoProcesses',
    'Custom Software Development',
    'POS Billing Systems',
    'Business Management Systems',
    'Flutter Mobile App Development',
    'Next.js Web Applications',
    'Software Company Islamabad',
    'Software Development Pakistan',
    'Saudi Arabia Commercial Websites',
    'Enterprise Web Portals',
    'Direct Engineering Collaboration',
  ],
  authors: [{ name: 'NeoProcesses', url: 'https://neoprocesses-website.vercel.app' }],
  creator: 'NeoProcesses',
  publisher: 'NeoProcesses',
  icons: {
    icon: assetPath('/favicon.svg'),
    shortcut: assetPath('/favicon.svg'),
    apple: assetPath('/favicon.svg'),
  },
  openGraph: {
    title: 'NeoProcesses | Custom Software. Built Around Your Business.',
    description:
      'High-performance web applications, cross-platform mobile systems, and business management software engineered for real daily operations.',
    url: 'https://neoprocesses-website.vercel.app',
    siteName: 'NeoProcesses',
    images: [
      {
        url: assetPath('/images/neoprocesses_brand_preview.png'),
        width: 1200,
        height: 630,
        alt: 'NeoProcesses — Custom Software Built Around Your Business',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeoProcesses | Custom Software. Built Around Your Business.',
    description:
      'High-performance web applications, cross-platform mobile systems, and business management software engineered for real daily operations.',
    images: [assetPath('/images/neoprocesses_brand_preview.png')],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeoProcesses',
    url: 'https://neoprocesses-website.vercel.app',
    logo: 'https://neoprocesses-website.vercel.app/images/neoprocesses_symbol.svg',
    description: 'Custom Software Development, Web Applications, POS Systems, and Mobile App Solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61595881740682',
      'https://www.instagram.com/neoprocesses/',
      'https://github.com/abdussami300-bot',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-326-5635826',
      contactType: 'customer support',
      availableLanguage: ['English', 'Urdu'],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={assetPath('/favicon.svg')} type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
