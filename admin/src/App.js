import Topbar from './components/views/Topbar/Topbar';
import './styles/global.scss';
import styles from './App.module.scss'
import Sidebar from './components/views/Sidebar/Sidebar';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
