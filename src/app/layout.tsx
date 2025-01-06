import type { Metadata } from 'next';
import './globals.css';
import ProviderLayout from '@/components/Provider/Provider';
import { Geologica } from 'next/font/google';
import { Inter } from 'next/font/google';

const geologica = Geologica({
    subsets: ['latin'],
    variable: '--font-geologica',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Setka',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geologica.variable} ${inter.variable} antialiased dark font-inter`}>
                <ProviderLayout>{children}</ProviderLayout>
            </body>
        </html>
    );
}
