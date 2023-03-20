import { rootApi } from "../api/rootApi";

export const postsApi = rootApi.injectEndpoints({

    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: () => '/posts/posts'
        }),


        addPost: builder.mutation({
            query: (data) => ({
                url: '/posts/create',
                method: 'POST',
                body: data
            }),

            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data: createdPost } = await queryFulfilled;

                    dispatch(
                        rootApi.util.updateQueryData('fetchPosts', undefined, (draft) => {
                            draft?.push(createdPost);
                        })
                    )

                } catch (error) {
                    console.log(error);
                }
            }
        }),

        fetchSinglePost: builder.query({
            query: (postId) => `/posts/${postId}`,
        }),
    })

})

export const { useFetchPostsQuery, useAddPostMutation, useFetchSinglePostQuery } = postsApi