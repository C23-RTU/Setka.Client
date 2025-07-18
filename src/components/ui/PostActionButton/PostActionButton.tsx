'use client';

import { m } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { match } from 'path-to-regexp';
import { useMemo } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineModeComment } from 'react-icons/md';

import { AUTH_PAGE } from '@/lib/config/routes.config';

import type { PostDetailDTO } from '@/api/axios-client';

import { usePostReaction } from './usePostReaction';
import { cn } from '@/lib/utils/utils';

interface Props {
    type: 'like' | 'comment';
    post: PostDetailDTO;
}

const ICON_SIZE = 21;

export function ActionButton({ type, post }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const { mutate: reactionHandler } = usePostReaction(post);

    const computedIcon = useMemo(() => {
        switch (type) {
            case 'like':
                return post.isUserReacted ? <IoMdHeart size={ICON_SIZE} /> : <IoMdHeartEmpty size={ICON_SIZE} />;
            case 'comment':
                return <MdOutlineModeComment size={ICON_SIZE} />;
        }
    }, [type, post.isUserReacted]);

    const isCommentType = useMemo(() => {
        return type === 'comment';
    }, [type]);

    const clickHandler = () => {
        if (type === 'like') reactionHandler();
        if (type === 'comment') router.push(AUTH_PAGE.POST_COMMENTS(post.id));
    };

    return (
        <m.div
            className={cn('flex cursor-pointer items-center gap-2 select-none', {
                'text-blue': isCommentType ? !!match(AUTH_PAGE.POST_COMMENTS(post.id))(pathname) : false,
            })}
            onClick={clickHandler}
            whileTap={{
                scale: isCommentType ? 1 : 1.4,
            }}
        >
            {computedIcon}
            <p className="text-xs">{isCommentType ? post.commentCount : post.reactionCount}</p>
        </m.div>
    );
}
