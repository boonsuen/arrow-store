export type ProductType = {
  id: string;
  name: string;
  description: string;
  photo: {
    id: string;
    altText: string;
    image: {
      publicUrlTransformed: string;
    }
  }[]
  price: number;
};