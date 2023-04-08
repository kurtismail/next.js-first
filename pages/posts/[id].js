import React from 'react'

const PostDetail = ({ post }) => {
    return (
        <div className='cards'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <style jsx>
                {`
                .cards {
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
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts = await res.json();

    const paths = posts.map((post) => {
        return {
            params: { id: post.id.toString() },
        }
    })
    return {
        paths,
        fallback: false
        //false yaparsak hata almadan 404  sayfası almamızı sağlar
    };
}
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
};
export default PostDetail;