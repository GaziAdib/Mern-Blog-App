import React from 'react'
import { useDeleteReplyMutation, useDeleteReplyQuery } from '../features/comments/commentsApi'

const Reply = ({ reply }) => {

    const [deleteReply] = useDeleteReplyMutation() || {};

    const deleteReplyhandler = () => {
        deleteReply({
            commentId: reply?.commentId,
            replyId: reply?._id
        });
    }


    return (
        <footer class="flex justify-between items-center mb-2 ml-8">
            <div class="flex items-center mx-2 px-2 rounded-md my-1 py-0.5">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough" />{reply?.username}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                    title="February 8th, 2022">{reply?.reply}</time></p>
                <button className='text-black dark:text-white mt-2 px-2 rounded-md bg-red-400 ml-2' onClick={deleteReplyhandler}>Delete</button>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                    title="February 8th, 2022"></time></p>
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
    )
}

export default Reply