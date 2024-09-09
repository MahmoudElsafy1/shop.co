interface product {
  category?: string;
  id?: number;
  title?: string;
  price?: number;
  image: string;
  rating?: { rate: number; count: number };
}
export default product;
