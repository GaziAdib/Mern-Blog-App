import React from 'react'

const Comment = ({ comment }) => {



    return (
        <div>
            <p>author: {comment?.username} commented {comment?.comment}</p>
        </div>
    )
}

export default Comment