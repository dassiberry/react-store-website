import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productsData from '../products.json';
import Navbar from '../components/Navbar';
import styles from './ProductPage.module.css';

// ProductPage component that displays details of a single product based on the URL parameter
const ProductPage = () => {
  const { sku } = useParams();
  const [product, setProduct] = useState<any>(null);

  //loads product data based on the id from the URL parameter
  useEffect(() => {
    const found = productsData.find((p: any) => p.sku === sku);
    setProduct(found); 
  }, [sku]);

  if (!product) return <div>Loading...</div>;

  //displays product info with a back link to the home page
  return (
    <div>
      <Navbar />
      <div className={styles.details}>
        <Link to="/">← Back</Link>
        <img src={`${import.meta.env.BASE_URL}images/${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;