import "../../App.css"
import NBAR from "../navBAR";
import MaiNBODY from "../mainCONTENT";
import FBAR from "../BARfooter";
function Home() {
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

export default Home;
