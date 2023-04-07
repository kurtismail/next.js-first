import Link from 'next/link'
import React from 'react'

const Post = ({ post }) => {
    return (
        <>
            <Link href={`/posts/${post.id}`}>
                <div className='card'>
                    <h3>{post.title}</h3>
                    {/* <p>{post.body}</p> */}
                </div>

            </Link>
            <style jsx>
                {`
                .card {
                    margin:1rem;
                    flex-basics:45%;
                    padding:1.5rem;
                    text-align:center;
                    color:inherit;
                    text-decoration:none;
                    border:1px solid #000;
                    border-radius:10px;
                    transition:color 0.2s ease, border-color 0.2s ease;
                }
                `}
            </style>
        </>
    )
}

export default Post