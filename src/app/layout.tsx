import type { Metadata } from 'next';
import { DM_Sans, Paytone_One } from 'next/font/google';
import '@/styles/globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const paytoneOne = Paytone_One({
  variable: '--font-paytone-one',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Revve Test Frontend',
  description: 'Simple page prototype',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${paytoneOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
