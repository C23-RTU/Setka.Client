'use client';

import { useState } from 'react';

import type { PostDetailDTO } from '@/api/axios-client';

import { ActionButton } from '../ui/PostActionButton/PostActionButton';

import { PostHeader } from './PostHeader/PostHeader';
import { PostImageWrapper } from './PostImageSwiper/PostImageWrapper';
import { cn } from '@/lib/utils/utils';

type PostCardProps = {
    className?: string;
    post: PostDetailDTO;
};

export function PostCard({ className, post }: PostCardProps) {
    const [showFull, setShowFull] = useState(false);

    const getTruncatedText = (text: string, limit: number) => {
        if (text.length <= limit) return text;
        const words = text.split(' ');
        let truncated = '';
        for (const word of words) {
            if ((truncated + (truncated ? ' ' : '') + word).length > limit) break;
            truncated += (truncated ? ' ' : '') + word;
        }
        return truncated;
    };

    const isLong = post.content.length > 356;
    const displayText = !showFull && isLong ? getTruncatedText(post.content, 200) : post.content;

    return (
        <article className={cn('flex flex-col gap-3', className)}>
            <PostHeader post={post} />
            <div>
                <p className="text-2xl font-bold my-1 text-neutral-50">{post.title}</p>
                <p className="font-inter font-light text-gray-300">
                    {displayText}
                    {!showFull && isLong && '...'}
                </p>
                {!showFull && isLong && (
                    <button
                        onClick={() => setShowFull(true)}
                        className="text-background-foreground text-sm font-inter mt-1 focus:outline-none"
                    >
                        Показать все
                    </button>
                )}
                {showFull && isLong && (
                    <button
                        onClick={() => setShowFull(false)}
                        className="text-background-foreground text-sm font-inter mt-1 focus:outline-none"
                    >
                        Скрыть все
                    </button>
                )}
            </div>
            <PostImageWrapper images={post.postImages} />
            <div className="flex items-center justify-between font-inter">
                <div className="flex gap-4">
                    <ActionButton post={post} type={'like'} />
                    <ActionButton post={post} type={'comment'} />
                </div>

                {/* <p className="text-xs opacity-50 font-inter">
                    {new Date().toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </p> */}
            </div>
        </article>
    );
}
