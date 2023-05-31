import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <div id='card' className='card d-flex' key={post.id} >
                    <div className='content col lg-3'>
                        <Post post={post} />
                    </div>
                </div>
            ))}
            <style jsx>
                {`
                .card {
                    margin:4rem;
                    width: 190px;
                    height: 254px;
                    background: #171717;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0px 0px 3px 1px #00000088;
                    cursor: pointer;
                  }
                  
                  .card .content {
                    border-radius: 5px;
                    background: #171717;
                    width: 186px;
                    height: 250px;
                    z-index: 1;
                    padding: 20px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  
                  .content::before {
                    opacity: 0;
                    transition: opacity 300ms;
                    content: ' ';
                    display: block;
                    background: white;
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    filter: blur(50px);
                  }
                  
                  .card:hover .content::before {
                    opacity: 1;
                  }
                  
                  .card::before {
                    opacity: 0;
                    content: ' ';
                    position: absolute;
                    display: block;
                    width: 120px;
                    height: 360px;
                    background: linear-gradient(90deg, transparent, #ff2288, #387EF0, transparent);
                    transition: opacity 300ms;
                    animation: rotation_9018 3000ms infinite linear;
                    animation-play-state: paused;
                  }
                  
                  .card:hover::before {
                    opacity: 1;
                    animation-play-state: running;
                  }
                  
                  .card::after {
                    position: absolute;
                    content: ' ';
                    display: block;
                    width: 190px;
                    height: 254px;
                    background: #17171733;
                    backdrop-filter: blur(50px);
                  }
                  
                  @keyframes rotation_9018 {
                    0% {
                      transform: rotate(0deg);
                    }
                  
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}
            </style>
        </div>
    )
}

export default PostList