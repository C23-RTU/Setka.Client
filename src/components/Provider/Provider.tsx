'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { LazyMotion, domAnimation } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { COLORS } from '@/lib/constants/color.constant';

import { queryClient } from './getQueryClient';

export default function ProviderLayout({ children }: PropsWithChildren) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </QueryClientProvider>
            <Toaster
                position="bottom-center"
                containerStyle={{ marginBottom: '42px' }}
                toastOptions={{
                    duration: 2000,
                    removeDelay: 500,
                    style: {
                        background: COLORS.secondary,
                        color: COLORS.white,
                        width: '100%',
                    },
                }}
            />
        </>
    );
}
