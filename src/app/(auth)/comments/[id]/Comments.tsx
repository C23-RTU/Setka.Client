'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect } from 'react';

import { CommentItem } from '@/components/CommentComponents/CommentItem';
import { TextareaEditorComment } from '@/components/CommentComponents/TextareaEditorComment';
import { useCommentStore } from '@/components/CommentComponents/store/useComment.store';
import { PostCard } from '@/components/PostCard/PostCard';
import { SkeletonList } from '@/components/Skeletons/SkeletonList';
import { BackButton } from '@/components/ui/BackButton/BackButton';

import { useInfinityScroll } from '@/hooks/useInfinityScroll';

import { commentApi, postApi } from '@/api/api';
import type { PostDetailDTO } from '@/api/axios-client/models';

import { Header, HeaderTitle } from '@/hoc/Header/Header';
import { MainContent } from '@/hoc/MainContent/MainContent';

export function Comments({ serverPost }: { serverPost: PostDetailDTO }) {
    const router = useRouter();

    const highlightComment = useCommentStore((store) => store.highlightComment);
    const resetHighlightComment = useCommentStore((store) => store.resetHighlightComment);

    const { data: post } = useQuery({
        queryKey: ['fetch-post', serverPost.id],
        queryFn: async () => (await postApi.postsGetById(serverPost.id)).data,
        initialData: serverPost,
    });

    const {
        ref,
        infiniteQuery: { data, isLoading, isFetchingNextPage, hasNextPage },
    } = useInfinityScroll({
        queryKey: ['fetch-post-comments', serverPost.id],
        queryFn: async ({ pageParam }) => (await commentApi.commentsGetByPostId(serverPost.id, 0, pageParam, 100)).data,
        pageSize: 100,
    });

    useEffect(() => {
        if (!highlightComment) return;

        document
            .getElementById(`comment-${highlightComment.inReplyTo}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });

        const timerId = setTimeout(() => {
            resetHighlightComment();
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [highlightComment]);

    return (
        <div className="page pt-[90px]">
            <Header className="justify-start gap-4 fixed top-0 left-0 right-0 px-pageX bg-bg py-pageY z-10 m-0 shadow">
                <BackButton onClick={() => router.back()} />
                <HeaderTitle>Комментарии</HeaderTitle>
            </Header>

            <MainContent>
                <PostCard post={post} />
                <div className="flex flex-col gap-4 pb-[56px]">
                    {data?.pages && data?.pages.length === 0 && <p className="m-auto">Комментариев нет</p>}
                    {isLoading && <SkeletonList />}

                    {!isLoading &&
                        data?.pages?.map((page, index) => (
                            <Fragment key={index}>
                                {page.map((item) => (
                                    <Fragment key={item.id}>
                                        {index > 0 && <span className="h-[1px] bg-secondary w-3/5 mx-auto" />}
                                        <CommentItem comment={item} />
                                    </Fragment>
                                ))}
                            </Fragment>
                        ))}
                    {isFetchingNextPage && <SkeletonList />}
                    {!isFetchingNextPage && <div ref={ref} />}

                    <TextareaEditorComment post={post} hasNextPage={hasNextPage} />
                    <TextareaEditorComment post={post} hasNextPage={hasNextPage} />
                </div>
            </MainContent>
        </div>
    );
}
