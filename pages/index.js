import Head from 'next/head';
import Irashai from '../components/irashai';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/FiraCode-Regular.ttf" as="font" crossOrigin="" />
        <title>
          Projects
        </title>
      </Head>

      <Irashai />
    </>
  )
}