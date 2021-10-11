import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import { ProductType } from './types';

const StyledProductCard = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
  }
`;

export default function Product({ product }: { product: ProductType }) {
  return (
    <StyledProductCard>
      <img
        src={product.photo[0]?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <h2>
        <Link href={`/shop/${product.id}`}>{product.name}</Link>
      </h2>
      <div>{formatMoney(product.price)}</div>
      <p>{product.description}</p>
    </StyledProductCard>
  );
}
