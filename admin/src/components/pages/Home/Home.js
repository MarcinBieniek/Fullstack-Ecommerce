import styles from './Home.module.scss';
import FeaturedInfo from '../../features/FeaturedInfo/FeaturedInfo';
import Chart from '../../features/Chart/Chart';
import {userData} from '../../../data/chartsData'

const Home = () => {
  return (
    <div className={styles.container}>
      <FeaturedInfo />
      <Chart data={userData} title={"User Analitics"} grid dataKey="Active User"/>
    </div>
  )
}

export default Home
