import styles from './Home.module.scss';
import FeaturedInfo from '../../features/FeaturedInfo/FeaturedInfo';
import Chart from '../../features/Chart/Chart';
import {userData} from '../../../data/chartsData'
import WidgetSmall from '../../features/WidgetSmall/WidgetSmall';
import WidgetLarge from '../../features/WidgetLarge/WidgetLarge';
import { useState, useMemo, useEffect } from 'react';
import { userRequest } from '../../../middleware/requestMethods'

const Home = () => {

  const [userStats, setUserStats] = useState([]);

  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats")
        res.data.map(item =>{
          setUserStats(prev => [
            ...prev,
            {name: months[item._id-1], "Active User": item.total}
          ])
        })
      } catch(err) {
        console.log('Home getStats error is ', err)
      }
    };
    getStats();
  }, [months]);

  return (
    <div className={styles.container}>
      <FeaturedInfo />
      <Chart data={userStats} title={"User Analitics"} grid dataKey="Active User"/>
      <div className={styles.home_widgets}>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home
