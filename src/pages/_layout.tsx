import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { Toaster } from 'sonner';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
    const data = await getData();

    return (
        <div>
            <meta property="description" content={data.description} />
            <link rel="icon" type="image/png" href={data.icon} />
            <Toaster richColors position="top-right" />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

const getData = async () => {
    const data = {
        description: 'An internet website!',
        icon: '/images/favicon.png',
    };

    return data;
};

export const getConfig = async () => {
    return {
        render: 'static',
    };
};
