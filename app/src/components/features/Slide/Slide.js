import styles from "./Slide.module.scss";

const Slide = (props) => {

  return (
    <div className={styles.slide}>
      <div className={styles.container_img}>
        <img className={styles.img} src={props.img} alt="sale"></img>
      </div>
      <div className={styles.container_info}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button>SHOW MORE</button>
      </div>
    </div>
  )
}

export default Slide







