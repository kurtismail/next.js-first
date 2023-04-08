import React from 'react'
import { URL } from '../../environment/index';


const VideoDetails = ({ video }) => {
    return (
        <div className='card'>
            <h3>{video.name}</h3>
            <p>{video.content}</p>
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
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`${URL}/api/videos`);
    const videos = await res.json();

    const paths = videos.map((video) => {
        return {
            params: { id: video.id.toString() },
        }
    })
    return {
        paths,
        fallback: false
        //false yaparsak hata almadan 404  sayfası almamızı sağlar
    };
}
export const getStaticProps = async (context) => {
    const res = await fetch(`${URL}/api/videos/${context.params.id}`);
    const video = await res.json();

    return {
        props: {
            video,
        },
    };
};
export default VideoDetails;