import styles from './Home.module.scss';
import FeaturedInfo from '../../features/FeaturedInfo/FeaturedInfo';
import Chart from '../../features/Chart/Chart';
import {userData} from '../../../data/chartsData'
import WidgetSmall from '../../features/WidgetSmall/WidgetSmall';
import WidgetLarge from '../../features/WidgetLarge/WidgetLarge';

const Home = () => {
  return (
    <div className={styles.container}>
      <FeaturedInfo />
      <Chart data={userData} title={"User Analitics"} grid dataKey="Active User"/>
      <div className={styles.home_widgets}>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home
