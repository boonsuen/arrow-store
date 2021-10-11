import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Arrow</title>
      </Head>
      <h1 className="container" style={{ marginTop: 30 }}>
        This is home page
      </h1>
    </>
  );
};

export default HomePage;
