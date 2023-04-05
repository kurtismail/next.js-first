import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/react.svg" />
            </Head>
            <h1 className="redColor">about</h1>
            <style jsx> {`
                .greenColor {
                    color:green;
                    background-color:black;
                }
                .redColor {
                    color: green;
                    font-size: 100px
                }
            
            `} </style>
        </>
    );
}