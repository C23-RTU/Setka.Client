import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { SendHorizonalIcon } from 'lucide-react';
import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { commentApi } from '@/api/api';
import type { PostDetailDTO } from '@/api/axios-client';

import { queryClient } from '../Provider/getQueryClient';

import { useCommentStore } from './useComment.store';
import { CommentPayloadSchema, type TCommentPayloadSchema } from '@/lib/types/comment.type';

export function TextareaEditorComment({ post }: { post: PostDetailDTO }) {
    const commentPayload = useCommentStore((store) => store.commentPayload);
    const resetCommentPayload = useCommentStore((store) => store.resetCommentPayload);

    const {
        handleSubmit,
        resetField,
        reset,
        register,
        formState: { isValid },
    } = useForm<TCommentPayloadSchema>({
        mode: 'onChange',
        resolver: zodResolver(CommentPayloadSchema),
        defaultValues: { ...commentPayload },
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ['send-comment'],
        mutationFn: async (payload: TCommentPayloadSchema) => await commentApi.commentsAdd(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['fetch-post-comments'],
            });
            queryClient.setQueryData(['fetch-post', post.id], () => {
                return { ...post, commentCount: post.commentCount + 1 };
            });
            resetField('content');
            resetCommentPayload();
        },
        onError: async () => {
            const { toast } = await import('react-hot-toast');
            toast.error('Ошибка', {
                position: 'top-center',
            });
        },
    });

    const sendCommentHandler: SubmitHandler<TCommentPayloadSchema> = (data) => {
        mutate(data);
    };

    useEffect(() => {
        reset({
            content: commentPayload.content,
            postId: post.id,
            parentId: commentPayload.parentId,
        });
    }, [commentPayload, post.id, reset]);

    return (
        <form
            onSubmit={handleSubmit(sendCommentHandler)}
            className="fixed left-0 right-0 bottom-0 flex gap-1 bg-bg items-center px-2 shadow-2xl shadow-black"
        >
            <Textarea
                rows={2}
                className="resize-none focus-visible:ring-inset focus-visible:ring-0 text-sm h-auto border-none shadow-none"
                placeholder="Комментарий"
                {...register('content')}
            />
            <Button className="h-[40px] w-[40px] rounded " type="submit" disabled={!isValid} isLoading={isPending}>
                <SendHorizonalIcon />
            </Button>
        </form>
    );
}
