import React, { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import Comment from '../components/Comment';
import { useAddCommentMutation, useFetchCommentsQuery } from '../features/comments/commentsApi';
import { useFetchSinglePostQuery } from '../features/posts/postsApi';

const PostDetail = () => {

    const [comment, setComment] = useState('');

    const navigate = useNavigate();

    const { postId } = useParams();

    const { data: post, isLoading, isError } = useFetchSinglePostQuery(postId) || {};

    // fetch all comments by postId
    const { data: comments } = useFetchCommentsQuery(postId) || {};

    // add comments to post by postId

    const [addComment] = useAddCommentMutation() || {}

    const submitHandler = (e) => {

        e.preventDefault();

        addComment({
            postId: postId,
            data: {
                postId: postId,
                username: 'admin',
                comment: comment
            }
        })

        setComment('')
    }

    return (
        <>
            <div className='container shadow-sm items-center mx-auto my-5 py-5 px-5'>
                <h2 className='text-center text-3xl mb-2 mt-2'>POST DETAIL</h2>
                <div className=''>
                    <img className='mx-auto' src={post?.image} alt='title' />
                    <div className='flex items-center mt-10 py-5 px-5'>
                        <h5 className='text-bold text-2xl font-bold mt-2 pt-2'>{post?.title}</h5>
                        <p className=' bg-green-200 text-black font-bold mt-4 rounded-full px-1 mx-2'>{post?.category}</p>
                    </div>

                    <p className='font-serif mt-4 pt-3 font-medium text-xl px-5'>{post?.description && post?.description}</p>

                </div>
            </div>

            <div className='container mt-4 mb-4 mx-auto'>
                <h3 className='text-center'>All Comments ({comments?.length})</h3>

                {
                    comments?.map((comment) => {
                        return <Comment key={comment?._id} comment={comment} />
                    })
                }

            </div>


            <div className='container mx-auto'>
                <h2 className='text-center mt-5 py-5 px-2 text-4xl'>Add Comments</h2>
                <hr />
                <div className='mx-10 px-6 mt-4 mb-2'>
                    <form onSubmit={submitHandler}>
                        <textarea placeholder='comment...' className='border-2 mt-2 mb-2 py-2 px-2 text-bold text-xl' value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button className="rounded-sm px-2 mx-2 my-1 bg-green-600 text-white" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PostDetail