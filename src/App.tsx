import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Router basename={baseUrl}>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/products/:sku" element={<ProductPage />} />          
          
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;