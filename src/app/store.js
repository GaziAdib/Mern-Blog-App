import { configureStore } from '@reduxjs/toolkit';

import { postsApi } from '../features/posts/postsApi';
import postsSlice from '../features/posts/postsSlice';
import commentsSlice from '../features/comments/commentsSlice';
import { commentsApi } from '../features/comments/commentsApi';


export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        posts: postsSlice,
        comments: commentsSlice

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware).concat(commentsApi.middleware),
})