import styles from './Categories.module.scss';
import { categories } from '../../../state/data';
import CategoryItem from '../../features/CategoryItem/CategoryItem';

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map(item => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Categories;