import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenProducts from './pages/MensProducts';
import WomensProducts from './pages/WomensProduts';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/mensproducts" element={<MenProducts />} />
            <Route path="/womensproducts" element={<WomensProducts />} />

          </Routes>
        
    </div>
  );
}

export default App;
