// /:postId/createComment'


import { rootApi } from "../api/rootApi";

export const commentsApi = rootApi.injectEndpoints({

    endpoints: (builder) => ({
        fetchComments: builder.query({
            query: (postId) => `/comments/${postId}/comments`,
            providesTags: ['Comment']
        }),

        addComment: builder.mutation({
            query: ({ postId, data }) => ({
                url: `/comments/${postId}/createComment`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Comment']

            // async onQueryStarted(args, { queryFulfilled, dispatch }) {
            //     try {

            //         const { data: createdComment} = await queryFulfilled;

            //         dispatch(
            //             rootApi.util.updateQueryData('fetchComments', undefined, (draft) => {
            //                 draft?.push(createdComment);
            //             })
            //         )

            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
        }),

        addReply: builder.mutation({
            query: ({ commentId, data }) => ({
                url: `/comments/${commentId}/reply`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Comment']
        }),

        deleteReply: builder.mutation({
            query: ({ commentId, replyId }) => ({
                url: `/comments/${commentId}/replies/${replyId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Comment']
        }),


    })

})

export const { useFetchCommentsQuery, useAddCommentMutation, useAddReplyMutation, useDeleteReplyMutation } = commentsApi


