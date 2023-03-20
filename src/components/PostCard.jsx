import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {

    const { _id, title, category, description, image } = post || {};

    return (

        <div class="mx-auto ml-4">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                    <img class="rounded-t-lg" src={image} alt="" />
                </a>
                <div class="p-5 mt-3 mb-2">
                    <span className='bg-green-100 text-gray-600 text-sm  my-3 px-2 mb-2 mt-3 rounded-full'>{category}</span>
                    <a href="#">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                    </a>

                    <p class="font-normal text-gray-700 mb-3 text-justify">{description ? description.substr(0, 60) : 'no description on this post'}...</p>
                    <Link to={`/post/${_id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                        Read more
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default PostCard