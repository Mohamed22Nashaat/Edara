import './App.css';
import Layout from './components/Layout/Layout';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
   <Layout/>
  );
};

export default App;
