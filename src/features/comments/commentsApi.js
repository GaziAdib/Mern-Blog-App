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
        })
    })

})

export const { useFetchCommentsQuery, useAddCommentMutation } = commentsApi