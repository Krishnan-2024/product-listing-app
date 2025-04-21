import ProductGrid from '../components/ProductGrid';
import Header from '../components/Header';
import { fetchProducts } from '../utils/api';

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <>
      <Header />
      <ProductGrid products={products} />
    </>
  );
}
