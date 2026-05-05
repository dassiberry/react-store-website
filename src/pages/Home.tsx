import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';

// Home component that displays a grid of products with links to their details pages
const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  //loads product data 
  useEffect(() => {
    setProducts(productsData); 
  }, []);

  //displays grid layout of products, each product is a link to its details page
  return (
    <div>
      <Navbar />
      <div className={styles.grid}>
        {products.map((product) => (
          <Link to={`/products/${product.sku}`} key={product.sku} className={styles.card}>
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;