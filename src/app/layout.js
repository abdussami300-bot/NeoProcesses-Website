import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  metadataBase: new URL('https://neoprocesses.com'),
  title: 'NeoProcesses | Custom Software. Built Around Your Business.',
  description:
    'We turn business challenges into practical digital solutions — from professional websites to custom POS and management systems.',
  keywords: [
    'NeoProcesses',
    'Custom Software Development',
    'POS Systems',
    'Business Management Systems',
    'Order Management Systems',
    'Mobile Application Development',
    'Flutter Development',
    'Next.js Web Applications',
    'Software Company Islamabad',
    'Pakistan Software Development',
  ],
  authors: [{ name: 'NeoProcesses' }],
  icons: {
    icon: assetPath('/favicon.svg'),
    shortcut: assetPath('/favicon.svg'),
    apple: assetPath('/favicon.svg'),
  },
  openGraph: {
    title: 'NeoProcesses | Custom Software. Built Around Your Business.',
    description:
      'We turn business challenges into practical digital solutions — from professional websites to custom POS and management systems.',
    url: 'https://neoprocesses.com',
    siteName: 'NeoProcesses',
    images: [
      {
        url: assetPath('/images/neoprocesses_brand_preview.png'),
        width: 1200,
        height: 630,
        alt: 'NeoProcesses Corporate Brand Identity',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={assetPath('/favicon.svg')} type="image/svg+xml" />
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
