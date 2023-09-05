import { Layout } from 'antd';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Layout className="layout">
        <Navbar />
      </Layout>
    </div>
  );
}

export default App;
