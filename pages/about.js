import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/react.svg" />
            </Head>
            <h1 className="redColor">The React Framework
                for the Web</h1>
            <p>Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
            <style jsx> {`
                .greenColor {
                    color:green;
                    background-color:black;
                    text-align:center;
                    margin-top:5%;
                }
                .redColor {
                    color: black;
                    font-size: 30px;
                    text-align: center;
                    margin-top:2%;
                }
                p {
                    margin-bottom:34%;
                }

            `} </style>
        </>
    );
}