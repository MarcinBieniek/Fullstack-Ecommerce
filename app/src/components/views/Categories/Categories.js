import styles from './Categories.module.scss';
import { categories } from '../../../state/data';
import Category from '../../features/Category/Category';


const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map(item => (
        <Category key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Categories;