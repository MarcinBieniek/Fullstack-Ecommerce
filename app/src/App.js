import './styles/global.scss';

import Home from './components/pages/Home/Home';
import ProductList from './components/pages/ProductList/ProductList';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Cart from './components/pages/Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './components/pages/Success/Success';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />    
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
