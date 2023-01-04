import NBAR from "../navBAR";
import MaiNBODY from "../mainCONTENT";
import FBAR from "../BARfooter";
import SIGNUP from "../signin";
function Signin() {
  return (
    <div >
    <div style={{ background: '#FFAB60'}}>
     <NBAR/>
     <SIGNUP />
   </div>
    <FBAR />
  </div>


  );
}

export default Signin;
