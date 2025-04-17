import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenProducts from './pages/MensProducts';
import WomensProducts from './pages/WomensProduts';
import ComingSoon from './components/ComingSoon';

import MenProductDetails from './pages/MenProductDetailPage';
import WomenProductDetails from './pages/WomenProductDetailPage';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/mensproducts" element={<MenProducts />} />
            <Route path="/womensproducts" element={<WomensProducts />} />
              <Route path='men/:id' element={<MenProductDetails />} />
              <Route path='women/:id' element={<WomenProductDetails />} />
              <Route path='inprogress' element={<ComingSoon />} />

          </Routes>
        
    </div>
  );
}

export default App;
