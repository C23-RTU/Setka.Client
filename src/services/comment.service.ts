import { api } from '@/api/api';

import type { IComment, TCommentPayloadSchema } from '@/lib/types/comment.type';

class commentService {
    private _comments = '/comments';

    /**
     * Получить список комментариев к посту
     * @param postId
     */
    async getByPostId(id: number): Promise<IComment[]> {
        return (await api.get(`${this._comments}/getByPostId/${id}`)).data;
    }

    async sendPost(payload: TCommentPayloadSchema) {
        return await api.post(`${this._comments}`, payload);
    }
}

export const CommentService = new commentService();
