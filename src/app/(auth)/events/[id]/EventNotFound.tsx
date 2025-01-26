'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function EventNotFound() {
    const router = useRouter();
    return (
        <main className="h-[95svh] w-full flex flex-col gap-2 items-center justify-center">
            <p className="text-9xl font-bold">404</p>
            <p className="text-2xl font-bold">Событие не найдено</p>
            <Button onClick={() => router.back()}>Вернуться назад</Button>
        </main>
    );
}
