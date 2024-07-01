import Head from 'next/head';
import HelloWorld from '@/components/HelloWorld';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <HelloWorld />
      </main>
    </div>
  );
};

export default Home;
