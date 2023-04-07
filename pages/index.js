import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import PostList from '@/components/PostList';


export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  //veriyi yakalayabileceğimiz alan
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();
  return {
    props: {
      // posts: posts
      posts,
    },
  };
};