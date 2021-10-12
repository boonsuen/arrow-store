import Head from 'next/head';
import ProductList from '../../components/ProductList';

const ShopPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shop | Arrow</title>
      </Head>
      <div className="container">
        <ProductList />
      </div>
    </>
  );
};

export default ShopPage;
