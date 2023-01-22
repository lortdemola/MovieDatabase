import NBAR from "../navBAR";
import MADD from "../MovieADD";
import FBAR from "../BARfooter";


function Add() {
  return (
    <div >
    <div style={{ background: '#FFAB60',height:'100vh'}}>
     <NBAR/>
     <MADD/>
   </div>
    <FBAR />
    
  </div>


  );
}

export default Add;
