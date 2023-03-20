import React from 'react'
import Backup from '../components/Backup';
import PostCard from '../components/PostCard'
import { useFetchPostsQuery } from '../features/posts/postsApi'

const Home = () => {

    const { data: posts, isError, isLoading } = useFetchPostsQuery() || {};

    return (
        <>


            <div className='container mx-auto py-5 px-3'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-2 my-2 px-2 py-2'>
                    {
                        posts?.map((post) => {
                            return <PostCard key={post?._id} post={post} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home