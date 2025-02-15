import { AuthApi, CommentsApi, EventsApi, InstitutesApi, PostsApi, ReactionsApi } from './axios-client/api';
import { BASE_API } from './base-axios-instance';

export const postApi = new PostsApi(undefined, undefined, BASE_API);
export const commentApi = new CommentsApi(undefined, undefined, BASE_API);
export const eventsApi = new EventsApi(undefined, undefined, BASE_API);
export const authApi = new AuthApi(undefined, undefined, BASE_API);
export const instituteApi = new InstitutesApi(undefined, undefined, BASE_API);
export const reactionApi = new ReactionsApi(undefined, undefined, BASE_API);
