import './App.css';

import NBAR from "./components/navBAR";
import MaiNBODY from "./components/mainCONTENT";
import FBAR from "./components/BARfooter";
function App() {
  return (
    <div >
    <div style={{ background: '#FFAB60'}}>
     <NBAR/>
     <MaiNBODY/>
    
   </div>
   
    <FBAR />
   
  </div>


  );
}

export default App;
