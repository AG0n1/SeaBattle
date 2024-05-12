import './App.css';
import HandlerLogin from './components/HandlerLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IvanEpishko from './components/gamescreen/IvanEpishko';
import SetShips from './components/SetShips';
import Malenki from "./components/Malenki";
import { UserProvider } from './components/Context';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Malenki />}/>
          <Route path="registration" element={<HandlerLogin />} />
          <Route path="setShips" element={<SetShips />} />
          <Route path="play" element = {<IvanEpishko />}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;