import './App.css';
import HandlerLogin from './components/HandlerLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IvanEpishko from './components/gamescreen/IvanEpishko';
import SetShips from './components/SetShips';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HandlerLogin />} />
        <Route path="setShips" element={<SetShips />} />
        <Route path="play" element = {<IvanEpishko />}/>
      </Routes>
    </BrowserRouter>
    //test
  );
}

export default App;