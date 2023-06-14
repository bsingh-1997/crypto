import {Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import Exchanges from './components/Exchanges';
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path = "/" element={<Home/>}></Route>
       
      <Route path = "/coins" element={<Coins/>}></Route>
      <Route path = "/exchanges" element={<Exchanges/>}></Route>
       <Route path = "/coins/:id" element={<CoinDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
