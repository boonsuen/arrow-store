import { useRouter } from 'next/router';

const ProductPage: React.FC = () => {
  const { slug } = useRouter().query;

  return <div className="container">Single product page, slug: {slug}</div>;
};

export default ProductPage;
