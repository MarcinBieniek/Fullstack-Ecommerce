import { style } from '@mui/system';
import Topbar from './components/views/Topbar/Topbar';
import './styles/global.scss';
import styles from './App.module.scss'
import Sidebar from './components/views/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.others}>other pages</div>
      </div>
    </div>
  );
}

export default App;
