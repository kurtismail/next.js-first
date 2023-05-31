import React from 'react'
import { URL } from '../../environment/index';


const VideoDetails = ({ video }) => {
    return (
        <div className='card'>
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
                <div className="card__content">
                </div>
            </div>
            <h3>{video.name}</h3>
            <p>{video.content}</p>
            <style jsx>
                {`
                .card {
                    width: 280px;
                    height: 204px;
                    margin: 0 auto;
                    background-color: #F8FBFE;
                    border-radius: 8px;
                    z-index: 1;
                   }
                   
                   .tools {
                    display: flex;
                    align-items: center;
                    padding: 9px;
                   }
                   
                   .circle {
                    padding: 0 4px;
                   }
                   
                   .box {
                    display: inline-block;
                    align-items: center;
                    width: 10px;
                    height: 10px;
                    padding: 1px;
                    border-radius: 50%;
                   }
                   
                   .black {
                    background-color: #ff605c;
                   }
                   
                   .yellow {
                    background-color: #ffbd44;
                   }
                   
                   .green {
                    background-color: #00ca4e;
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