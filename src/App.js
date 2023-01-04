import './App.css';

import NBAR from "./components/navBAR";
import MaiNBODY from "./components/mainCONTENT";
import FBAR from "./components/BARfooter";
import {Route, Routes} from "react-router-dom";
import Add from './components/page/add';
import Login from './components/page/LogIN';
import Details from './components/page/details';
import Home from './components/page/home';
import Signin from './components/page/SignIN';
function App() {
  return (
    //<div >
    //<div style={{ background: '#FFAB60'}}>
    <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<Login/>}></Route>
                <Route path="/signup" element={<Signin/>}></Route>
                <Route path="/add" element={<Add/>}></Route>
                <Route path="/details" element={<Details/>}></Route>
            </Routes>
        </>


  );
}

export default App;
