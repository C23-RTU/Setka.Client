'use client';

import { NotificationBadge } from '@/components/Badge/NotificationBadge/NotificationBadge';
import { PostCard } from '@/components/PostCard/PostCard';
import { SearchInput } from '@/components/ui/SearchInput/SearchInput';
import { Skeleton } from '@/components/ui/skeleton';

import { useInfinityScroll } from '@/hooks/useInfinityScroll';

import { feedApi } from '@/api/api';

import { Header, HeaderTitle } from '@/hoc/Header/Header';
import { MainContent } from '@/hoc/MainContent/MainContent';

const getTimeBasedGreeting = (): string => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
        return 'Доброе утро';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Добрый день';
    } else if (currentHour >= 18 && currentHour < 23) {
        return 'Добрый вечер';
    } else {
        return 'Доброй ночи';
    }
};

export default function Home({ username }: { username: string }) {
    const {
        ref,
        infiniteQuery: { data, isLoading, isFetchingNextPage, hasNextPage, error },
    } = useInfinityScroll({
        queryKey: ['fetch-feed-posts'],
        queryFn: async ({ pageParam = 0 }) => (await feedApi.feedGetFeedPosts(pageParam, 10)).data,
        pageSize: 10,
    });

    return (
        <div className="page">
            <Header>
                <HeaderTitle>{getTimeBasedGreeting()}, {username} 👋</HeaderTitle>
                <NotificationBadge count={0} />
            </Header>

            <MainContent>
                {/* <div className="flex justify-center">
                    <EventCard />
                </div> */}
                <p className="text-xl font-semibold">Лента</p>
                <SearchInput placeholder="Поиск по ленте..." />
                <div className="flex flex-col gap-10">
                    {isLoading &&
                        Array(3)
                            .fill(0)
                            .map((_, index) => <Skeleton key={index} className="h-[320px] w-full" />)}
                    {data && data.pages.flatMap((page) => page).map((post) => <PostCard key={post.id} post={post} />)}
                    {isFetchingNextPage && <Skeleton className="h-[320px] w-full" />}
                    {!hasNextPage && <p className="text-center text-neutral-500">Ваша лента закончилась</p>}
                    {error && <p className="text-center text-neutral-500">Не удалось выполнить загрузку постов. Пожалуйста, повторите позже.</p>}
                    <div ref={ref}></div>
                </div>
            </MainContent>
        </div>
    );
}
