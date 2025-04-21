import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenProducts from './pages/MensProducts';
import WomensProducts from './pages/WomensProduts';
import ComingSoon from './components/ComingSoon';
import ScrollToTop from './components/ScrollToTop';
import Cart from './components/Cart';

import MenProductDetails from './pages/MenProductDetailPage';
import WomenProductDetails from './pages/WomenProductDetailPage';
import MobilesProducts from './pages/MobilesProducts';
import MobilesProductDetailPage from './pages/MobileProductDetailPage';

function App() {
  return (
    <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/mensproducts" element={<MenProducts />} />
            <Route path="/womensproducts" element={<WomensProducts />} />
            <Route path='/mobiles' element={<MobilesProducts />} />
              <Route path='men/:id' element={<MenProductDetails />} />
              <Route path='women/:id' element={<WomenProductDetails />} />
              <Route path='mobile/:id' element={<MobilesProductDetailPage />} />
              <Route path='inprogress' element={<ComingSoon />} />
              <Route path='/cart' element={<Cart />} />
          </Routes>
        
    </div>
  );
}

export default App;
