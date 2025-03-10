import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { postApi } from '@/api/api';

import { Comments } from './Comments';

export const metadata: Metadata = {
    title: 'Комментарии',
    description: 'Комментарии',
};

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
    const postId = (await params).id;

    try {
        const post = (await postApi.postsGetById(postId)).data;
        return <Comments serverPost={post} />;
    } catch {
        return notFound();
    }
};

export default Page;
