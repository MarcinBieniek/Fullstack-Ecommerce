import styles from "./Slide.module.scss";

const Slide = ({item}) => {

  return (
    <div className={styles.slide}>
      <div className={styles.container_img}>
        <img className={styles.img} src={item.img} alt="sale"></img>
      </div>
      <div className={styles.container_info}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <button>SHOW MORE</button>
      </div>
    </div>
  )
}

export default Slide







