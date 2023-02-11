import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/views/Topbar/Topbar';
import './styles/global.scss';
import styles from './App.module.scss'
import Sidebar from './components/views/Sidebar/Sidebar';
import Home from './components/pages/Home/Home';
import UserList from './components/pages/UserList/UserList';
import User from './components/pages/User/User';

import AddUser from './components/pages/AddUser/AddUser';
import ProductList from './components/pages/ProductList/ProductList';
import Product from './components/pages/Product/Product';
import AddProduct from './components/pages/AddProduct/AddProduct';

const App = () => {
  return ( 
      <BrowserRouter>
          <div className="App">
            <Topbar />
            <div className={styles.container}>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/new-user" element={<AddUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/new-product" element={<AddProduct />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
