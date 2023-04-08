import { URL } from '../../environment/index';
import Head from 'next/head'




export default function Videos({ videos }) {
    console.log(videos)
    return (
        <>
            <Head>
                <title>Videos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}

export const getStaticProps = async () => {
    //veriyi yakalayabileceğimiz alan
    const res = await fetch(`${URL}/api/videos`);
    const videos = await res.json();
    return {
        props: {
            // posts: posts
            videos,
        },
    };
};