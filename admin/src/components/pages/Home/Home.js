import styles from './Home.module.scss';

import React from 'react'
import FeaturedInfo from '../../features/FeaturedInfo/FeaturedInfo';

const Home = () => {
  return (
    <div className={styles.container}>
      <FeaturedInfo />
    </div>
  )
}

export default Home
