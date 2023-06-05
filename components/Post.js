import Link from 'next/link'
import React from 'react'

const Post = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <h3></h3>
        {/* <p>{post.body}</p> */}
        <div className="card-container">
          <div className="card">
            <div className="img-content">
              <img src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" alt="" width={350} />
              <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z" fill-rule="nonzero"></path></svg>
            </div>
            <div className="content">
              <h2 className="heading">{post.title}</h2>
            </div>
          </div>
        </div>

      </Link>
      <style jsx>
        {`
                .card-container {
                    width: 300px;
                    height: 300px;
                    position: relative;
                    border-radius: 10px;
                  }
                  .card-container::before {
                    content: "";
                    z-index: -1;
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
                    transform: translate3d(0, 0, 0) scale(0.95);
                    filter: blur(20px);
                  }
                  
                  .card {
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    overflow: hidden;
                  }
                  
                  .card .img-content {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
                    transition: scale 0.6s, rotate 0.6s, filter 1s;
                  }
                  
                  .card .img-content svg {
                    width: 50px;
                    height: 50px;
                    fill: #212121;
                    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                  }
                  
                  .card .content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 10px;
                    color: #000;
                    background-color: #fff;
                    padding: 20px;
                    line-height: 1.5;
                    border-radius: 5px;
                    opacity: 1;
                    pointer-events: none;
                    transform: translateY(px);
                    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                  }
                  
                  .card .content .heading {
                    font-size: 32px;
                    font-weight: 700;
                  }
                  
                  .card:hover .content {
                    opacity: .7;
                    transform: translateY(0);
                  }
                  
                  .card:hover .img-content {
                    scale: 2.5;
                    rotate: 30deg;
                    filter: blur(7px);
                  }
                  
                  .card:hover .img-content svg {
                    fill: transparent;
                  }
                `}
      </style>
    </>
  )
}

export default Post