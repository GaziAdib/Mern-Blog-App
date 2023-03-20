import React, { useState } from 'react'
import { useAddReplyMutation } from '../features/comments/commentsApi'

const Comment = ({ comment }) => {


    const [reply, setReply] = useState('');

    const [addReply, { isLoading, isSuccess }] = useAddReplyMutation() || {};

    const submitHandler = (e) => {
        e.preventDefault();

        addReply({
            commentId: comment?._id,
            data: {
                commentId: comment?._id,
                username: 'admin',
                reply: reply
            }

        })
    }


    return (
        <div>
            <p>author: {comment?.username} commented {comment?.comment}</p>

            <div className='mt-5 mb-2 tex-center'>
                <form onSubmit={submitHandler}>

                    <input type='text' value={reply} onChange={(e) => setReply(e.target.value)} placeholder="reply" />
                    <button type='submit'>Reply</button>
                </form>
            </div>
        </div>
    )
}

export default Comment