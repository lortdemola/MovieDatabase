import NBAR from "../navBAR";
import MaiNBODY from "../mainCONTENT";
import FBAR from "../BARfooter";
import LOGIN from "../Login";
function Login() {
  return (
    <div >
    <div style={{ background: '#FFAB60',height:'100vh'}}>
     <NBAR/>
     <LOGIN/>
   </div>
    
    <FBAR />
  </div>


  );
}

export default Login;
