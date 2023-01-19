import React from 'react';
import Annoucment from '../../views/Annoucment/Annoucment';
import Categories from '../../views/Categories/Categories';
import Navbar from '../../views/Navbar/Navbar';
import Slider from '../../views/Slider/Slider';
import Products from '../../views/Products/Products';

const Home = () => {
  return (
    <div>
      <Annoucment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
