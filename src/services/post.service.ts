import { api } from '@/api/api';

import type { Post } from '@/lib/types/post';

class postService {
    async getAll(): Promise<Post[]> {
        return (await api.get('/posts')).data;
    }

    async getById(postId: number): Promise<Post> {
        return (await api.get(`/posts/${postId}`)).data;
    }

    async getByClubId(clubId: number): Promise<Post[]> {
        return (await api.get(`/posts/getByClubId/${clubId}`)).data;
    }
}
export const PostService = new postService();
