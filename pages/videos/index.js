import Link from 'next/link';
import { URL } from '../../environment/index';
import Head from 'next/head';




export default function Videos({ videos }) {
    console.log(videos)
    return (
        <div>
            <Head>
                <title>Videos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {videos.map((video) => (
                <Link key={video.id} href={`/videos/${video.id}`}>
                    <h2 className='card'>{video.name}</h2>
                </Link>
            ))}
            <style jsx>
                {`
                .card {
                    margin:2rem;
                    flex-basics:50%;
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
    )
}

export const getStaticProps = async () => {
    //veriyi yakalayabileceğimiz alan
    const res = await fetch(`${URL}/api/videos`);
    //http yi otomatikleştirmek adına bu işlemi yaptık
    const videos = await res.json();
    return {
        props: {
            videos,
        },
    };
};