import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// Navbar component with a link to the home page
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>Stationery Central</Link> 
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;