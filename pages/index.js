import Head from 'next/head';
// import Image from 'next/image'
import Layout from '../components/layout';
import Irashai from '../components/irashai';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/public/fonts/FiraCode-Regular.ttf" as="font" crossOrigin=""/>
        <title>
          Personal Projects
        </title>
      </Head>

      <body>
        <Irashai/>
        
        {/* <Image src={"/images/Rio.png"} width={240} height={180}></Image> */}
      </body>

    </>
  )
}