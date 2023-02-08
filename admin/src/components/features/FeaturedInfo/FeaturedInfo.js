import styles from './FeaturedInfo.module.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import React from 'react'

const FeaturedInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.featured_item}>
        <span className={styles.featured_title}>Revanue</span>
        <div className={styles.featured_money_container}>
          <span className={styles.featured_money}>$2,41</span>
          <span className={styles.featured_money_rate}>
            -11,4 
            <ArrowDownwardIcon className={`${styles.featured_icon} ${styles.negative}`} />
          </span>     
        </div>
        <span className={styles.featured_sub}>Compared to last month</span>
      </div>

      <div className={styles.featured_item}>
        <span className={styles.featured_title}>Sales</span>
        <div className={styles.featured_money_container}>
          <span className={styles.featured_money}>$2,41</span>
          <span className={styles.featured_money_rate}>
            -11,4 
            <ArrowDownwardIcon className={`${styles.featured_icon} ${styles.negative}`}/>
          </span>     
        </div>
        <span className={styles.featured_sub}>Compared to last month</span>
      </div>

      <div className={styles.featured_item}>
        <span className={styles.featured_title}>Cost</span>
        <div className={styles.featured_money_container}>
          <span className={styles.featured_money}>$2,41</span>
          <span className={styles.featured_money_rate}>
            +11,4 
            <ArrowUpwardIcon className={styles.featured_icon}/>
          </span>     
        </div>
        <span className={styles.featured_sub}>Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
