import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router basename="/react-store-website">
      <div className="app-container">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/product/:sku" element={<ProductPage />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;