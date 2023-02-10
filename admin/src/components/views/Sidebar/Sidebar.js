import styles from "./Sidebar.module.scss"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        <div className={styles.menu}>
          <h3 className={styles.menu_title}>Dashboard</h3>
          <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_listitem}>
              <LineStyleIcon className={styles.sidebar_icon}/>
              Home
            </li>
            <li className={styles.sidebar_listitem}>
              <TimelineIcon className={styles.sidebar_icon}/>
              Analitics
            </li>
            <li className={styles.sidebar_listitem}>
              <TrendingUpIcon className={styles.sidebar_icon}/>
              Sales
            </li>
          </ul>
        </div>

        <div className={styles.menu}>
          <h3 className={styles.menu_title}>Quick menu</h3>
          <ul className={styles.sidebar_list}>
            <Link to="/users" className={styles.link}>
              <li className={styles.sidebar_listitem}>
                <PermIdentityIcon className={styles.sidebar_icon} />
                Users
              </li>
            </Link>
            <Link to="/products">
              <li className={styles.sidebar_listitem}>
                <StorefrontIcon className={styles.sidebar_icon} />
                Products
              </li>
            </Link>
            <li className={styles.sidebar_listitem}>
              <AttachMoneyIcon className={styles.sidebar_icon} />
              Transactions
            </li>
            <li className={styles.sidebar_listitem}>
              <BarChartIcon className={styles.sidebar_icon} />
              Reports
            </li>
          </ul>
        </div>

        <div className={styles.menu}>
          <h3 className={styles.menu_title}>Notifications</h3>
          <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_listitem}>
              <MailOutlineIcon className={styles.sidebar_icon} />
              Mail
            </li>
            <li className={styles.sidebar_listitem}>
              <DynamicFeedIcon className={styles.sidebar_icon} />
              Feedback
            </li>
            <li className={styles.sidebar_listitem}>
              <ChatBubbleOutlineIcon className={styles.sidebar_icon}/>
              Messages
            </li>
          </ul>
        </div>

        <div className={styles.menu}>
          <h3 className={styles.menu_title}>Staff</h3>
          <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_listitem}>
              <WorkOutlineIcon className={styles.sidebar_icon}/>
              Manage
            </li>
            <li className={styles.sidebar_listitem}>
              <TimelineIcon className={styles.sidebar_icon}/>
              Analytics
            </li>
            <li className={styles.sidebar_listitem}>
              <ReportIcon className={styles.sidebar_icon}/>
              Reports
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
