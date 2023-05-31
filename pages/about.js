import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/react.svg" />
            </Head>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <h1 >The React Framework
                        for the Web</h1>
                    <p>Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
                </div>
            </div>
            <style jsx> {`

                .card {
                    max-width: 250px;
                    height: 350px;
                    transition: all 0.2s;
                    position: relative;
                    cursor: pointer;
                  }
                  h1, p{
                    padding:15px;
                  }
                  .card-inner {
                    width: inherit;
                    height: inherit;
                    background: rgba(255,255,255,.05);
                    box-shadow: 0 0 10px rgba(0,0,0,0.25);
                    backdrop-filter: blur(10px);
                    border-radius: 8px;
                  }
                  
                  .card:hover {
                    transform: scale(1.04) rotate(1deg);
                  }
                  
                  .circle {
                    width: 100px;
                    height: 100px;
                    background: radial-gradient(#b0e633, #53ef7d);
                    border-radius: 50%;
                    position: absolute;
                    animation: move-up6 2s ease-in infinite alternate-reverse;
                  }
                  
                  .circle:nth-child(1) {
                    top: -25px;
                    left: -25px;
                  }
                  
                  .circle:nth-child(2) {
                    bottom: -25px;
                    right: -25px;
                    animation-name: move-down1;
                  }
                  
                  @keyframes move-up6 {
                    to {
                      transform: translateY(-10px);
                    }
                  }
                  
                  @keyframes move-down1 {
                    to {
                      transform: translateY(10px);
                    }
                  }

            `} </style>
        </>
    );
}