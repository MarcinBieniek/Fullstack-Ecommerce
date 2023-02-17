import styles from './WidgetLarge.module.scss';
import { useState, useEffect } from 'react';
import { userRequest} from '../../../middleware/requestMethods';
import { format } from 'timeago.js';

const WidgetLarge = () => {

  const [orders, setOrders] = useState([])

  console.log('orders are', orders)

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders")
        setOrders(res.data)
      } catch(err) {
        console.log('users fetch error is ', err)
      }
    };
    getOrders()
  }, [])


  const Button = ({ type }) => {

    // WIP - button colors / p 3 1:16:02

    return <button className={styles.button}>{type}</button>
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Latest transactions</h3>
      <table className={styles.table}>
        <tr className={styles.table_row}>
          <th className={styles.table_header}>Customer</th>
          <th className={styles.table_header}>Date</th>
          <th className={styles.table_header}>Amounts</th>
          <th className={styles.table_header}>Status</th>
        </tr>
        
        {orders.map(order => (
          <tr className={styles.table_row}>
          <td className={styles.user}>
            <span className={styles.name}>{order.userId}</span>
          </td>
          <td className={styles.date}>{format(order.createdAt)}</td>
          <td className={styles.amount}>${order.amount}</td>
          <td className={styles.status}>
            <Button type={order.status}></Button>
          </td>
          </tr>  
        ))}
            
      </table>
    </div>
  )
}  

export default WidgetLarge
  