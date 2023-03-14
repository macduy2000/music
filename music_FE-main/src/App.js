
import './App.css';
import './components/navbar.js'
import "./components/listSong"
import Navbar from './components/navbar.js';
import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import allActions from './redux/actions';
import Songs from './components/songs';
import LogInOut from './components/logIn_logOut';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(allActions.listSong())
  },[])


  return (
    <div className="App">
     
      <BrowserRouter>
      <header className=" bg-slate-900 h-24 text-center text-white leading-[6rem] ">
      <Navbar/>
      </header>
    <Routes>
      <Route path="/" element={<Songs/>}/>
      
        <Route path="/user" element={<LogInOut />}/>
      
      
      
    </Routes>
  </BrowserRouter>




   
    </div>
  );
}

export default App;
