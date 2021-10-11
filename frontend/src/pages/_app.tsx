import NProgress from 'nprogress';
import Router from 'next/router';
import Layout from '../components/Layout';
// import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps, apollo }: any) => {  
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.svg" />
      </Head>
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

MyApp.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps: {
    query?: string;
  } = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp as any);
