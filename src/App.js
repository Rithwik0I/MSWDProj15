import logo from './logo.svg';
import './App.css';

import NestedModal from './components/popup.js';
import SignUp from './components/pages/SignUp.js';
import StickyFooter from './components/footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/pages/Login.js';
import MyButton from './useless/clickehero.js';
import { bgcolor } from '@mui/system';
import RegisterAircraft from './components/pages/RegisterAircraft.js';
import GetUsers from './components/pages/getUsers.js';
import Main from './components/pages/Home.js';
import Drawee from './components/drawee.js';
import Topper from './components/header.js';
import CreateFlight from './components/pages/CreateFlight.js';




function App() {
  return (
    
    <div className="App">
      <header className='App-header'>
      <Topper />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <div className='App-body'>
        
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/createflight/' element={<CreateFlight/>}></Route>
        <Route path='/login/' element={<LogIn />}></Route>
        <Route path='/sign/' element={<SignUp />}></Route>
        <Route path='/registeraircraft/' element={<RegisterAircraft />}></Route>
        <Route path='/getusers/' element={<GetUsers />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    
      
      <footer className='App-footer'>
        <StickyFooter />
      </footer>
      
    </div>
    
  );
}

export default App;
