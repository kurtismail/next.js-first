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
                    <div className='card'>
                        <h2 >{video.name}</h2>
                    </div>
                </Link>
            ))}
            <style jsx>
                {`
                .card {
                    width: 190px;
                    display: flex;
                    flex-direction: column;
                    margin: 2rem;
                    height: 80px;
                    border-radius: 30px;
                    background: #212121;
                    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                                -15px -15px 30px rgb(60, 60, 60);
                   }
                h2 {
                    text-align: center;
                    justify-content: center;
                    color: #fff;
                    align-items: center;
                    
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