import styles from './FeaturedInfo.module.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from '../../../middleware/requestMethods';
import { useState, useEffect } from 'react'

const FeaturedInfo = () => {

  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income") // it returns income of this and previous month
        setIncome(res.data)
        setPerc((res.data[1].total*100) / res.data[0].total - 100)
      } catch(err) {
        console.log('getIncome error is ', err)
      }
    }
    getIncome();
  }, []);

  console.log('perc', perc)
  console.log('income', income[1].total)

  return (
    <div className={styles.container}>
      
      <div className={styles.featured_item}>
        <span className={styles.featured_title}>Revanue</span>
        <div className={styles.featured_money_container}>
          <span className={styles.featured_money}>${income[1].total}</span>
          <span className={styles.featured_money_rate}>
            %{perc} 
            { perc < 0 
            ? <ArrowDownwardIcon className={`${styles.featured_icon} ${styles.negative}`} />
            : <ArrowUpwardIcon className={styles.featured_icon}/>
            }
            
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
