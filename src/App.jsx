import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreFront from './pages/StoreFront';
import ProductDetails from './pages/ProductDetails';
import ProductDelivery from './pages/ProductDelivery';
import Nav from './pages/Nav';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div id="react-root">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<StoreFront />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products/:id/delivery' element={<ProductDelivery />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
