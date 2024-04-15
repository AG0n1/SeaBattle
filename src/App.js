import './App.css';
import HandlerLogin from './components/HandlerLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IvanEpishko from './components/gamescreen/IvanEpishko';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HandlerLogin />} />
        <Route path="play" element = {<IvanEpishko />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;