import styles from './Category.module.scss'

const Category = ({item}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.img} alt="category"/>
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Category
