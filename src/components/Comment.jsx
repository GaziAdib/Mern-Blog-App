import React, { useState } from 'react'
import { useAddReplyMutation } from '../features/comments/commentsApi'
import Reply from './Reply';

const Comment = ({ comment }) => {


    const [reply, setReply] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);

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

        setReply('')
        setShowReplyBox(false);
    }


    const replyButtonClicked = () => {
        setShowReplyBox((prev) => !prev);
    }


    return (

        <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough" />{comment?.username}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">{comment?.createdAt}</time></p>
                </div>
                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button">
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                        </path>
                    </svg>
                    <span class="sr-only">Comment settings</span>
                </button>

                <div id="dropdownComment1"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton">
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">{comment?.comment}</p>
            <div class="flex items-center mt-4 space-x-4">
                <button onClick={replyButtonClicked} type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                    <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    Reply
                </button>
                {
                    showReplyBox &&
                    <form onSubmit={submitHandler}>
                        <input
                            className='text-center font-serif mt-2 mb-2 rounded-md border-2'
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            type='text'
                            placeholder='add reply...' />

                        <button className='bg-red-400 rounded-md px-2 mx-2 mt-2 mb-2'>Reply</button>
                    </form>
                }



            </div>



            {
                comment?.replies?.length >= 0 && comment?.replies?.map((reply, i) => {
                    return <Reply key={reply?._id} reply={reply} />
                })
            }
        </article>
    )
}

export default Comment



    // < div class="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4" >
    //         <p class="text-center md:text-left md:w-1/2">author: {comment?.username} commented {comment?.comment}</p>
    //         <div class="w-full md:w-1/2">
    //             <div class="space-y-4">
    //                 <div>
    //                     <h2 class="text-center md:text-left">---Replies---</h2>
    //                     <div class="space-y-2">
    //                         {comment?.replies?.length >= 0 && comment?.replies?.map((r, index) => {
    //                             return <p class="ml-4 bg-blue-600 px-2 text-white" key={r?._id}>{r?.reply}</p>
    //                         })}
    //                     </div>
    //                 </div>
    //                 <div class="flex flex-col space-y-2 md:flex-row md:justify-end md:space-y-0">
    //                     <form onSubmit={submitHandler} class="flex space-x-2">
    //                         <input type="text" value={reply} onChange={(e) => setReply(e.target.value)} placeholder="reply" class="flex-1 border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    //                         <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Reply</button>
    //                     </form>
    //                 </div>
    //             </div>
    //             <hr class="my-4" />
    //         </div>
    //     </ >