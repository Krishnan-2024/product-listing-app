import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}
