import styles from './WidgetLarge.module.scss';
import clsx from 'clsx';

const WidgetLarge = () => {

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
        
        <tr className={styles.table_row}>
          <td className={styles.user}>
            <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="User avatar" className={styles.avatar} />
            <span className={styles.name}>Susan Carol</span>
          </td>
          <td className={styles.date}>2 Febbruary 2023</td>
          <td className={styles.amount}>$122.00</td>
          <td className={styles.status}>
            <Button type="Approved"></Button>
          </td>
        </tr>  

        <tr className={styles.table_row}>
          <td className={styles.user}>
            <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="User avatar" className={styles.avatar} />
            <span className={styles.name}>Susan Carol</span>
          </td>
          <td className={styles.date}>2 Febbruary 2023</td>
          <td className={styles.amount}>$122.00</td>
          <td className={styles.status}><Button type="Declined"></Button></td>
        </tr>

        <tr className={styles.table_row}>
          <td className={styles.user}>
            <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="User avatar" className={styles.avatar} />
            <span className={styles.name}>Susan Carol</span>
          </td>
          <td className={styles.date}>2 Febbruary 2023</td>
          <td className={styles.amount}>$122.00</td>
          <td className={styles.status}><Button type="Approved"></Button></td>
        </tr>

        <tr className={styles.table_row}>
          <td className={styles.user}>
            <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="User avatar" className={styles.avatar} />
            <span className={styles.name}>Susan Carol</span>
          </td>
          <td className={styles.date}>2 Febbruary 2023</td>
          <td className={styles.amount}>$122.00</td>
          <td className={styles.status}><Button type="Pending"></Button></td>
        </tr>

      </table>
    </div>
  )
}  

export default WidgetLarge
  