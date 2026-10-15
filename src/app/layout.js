import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  metadataBase: new URL('https://neoprocesses.com'),
  title: 'NeoProcesses | Software & Digital Solutions',
  description:
    'NeoProcesses builds practical websites, mobile applications, business management systems, and tailored digital workflows for growing businesses.',
  keywords: [
    'NeoProcesses',
    'Software Development',
    'Mobile Application Development',
    'Flutter Development',
    'Next.js Website',
    'Business Management Systems',
    'Custom Software Solutions',
    'Web Development Islamabad',
  ],
  authors: [{ name: 'NeoProcesses' }],
  icons: {
    icon: assetPath('/favicon.svg'),
    shortcut: assetPath('/favicon.svg'),
    apple: assetPath('/favicon.svg'),
  },
  openGraph: {
    title: 'NeoProcesses | Your Business. Our Solution.',
    description:
      'Practical digital solutions for businesses that want to work smarter, serve customers better, and grow with confidence.',
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
