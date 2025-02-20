'use client';

import { useQuery } from '@tanstack/react-query';

import { NotificationBadge } from '@/components/Badge/NotificationBadge/NotificationBadge';
import { PostCard } from '@/components/PostCard/PostCard';
import { SearchInput } from '@/components/ui/SearchInput/SearchInput';
import { Skeleton } from '@/components/ui/skeleton';

import { postApi } from '@/api/api';

import { Header, HeaderTitle } from '@/hoc/Header/Header';
import { MainContent } from '@/hoc/MainContent/MainContent';
import { PostLoader } from '@/components/ui/PostLoader/PostLoader';

export default function Home({ username }: { username: string }) {
    const { data: posts, isLoading } = useQuery({
        queryKey: ['fetch-posts-list'],
        queryFn: async () => (await postApi.postsGetAll()).data,
        staleTime: 30000, // кешируем  на 30 секунд
    });

    return (
        <div className="page">
            <Header>
                <HeaderTitle>Доброе утро, {username} 👋</HeaderTitle>
                <NotificationBadge />
            </Header>

            <MainContent>
                {/* <div className="flex justify-center">
                    <EventCard />
                </div> */}
                <p className="text-xl font-semibold">Лента</p>
                <div>
                    <SearchInput placeholder="Поиск по ленте..." />
                </div>
                <div>
                    <PostLoader isLoading={isLoading} posts={posts} />
                </div>
            </MainContent>
        </div>
    );
}
