import "../../App.css"
import NBAR from "../navBAR";
import MaiNBODY from "../mainCONTENT";
import FBAR from "../BARfooter";
function Home() {
  return (
    <div >
    <div style={{ background: '#FFAB60',height:'100%'}}>
     <NBAR/>
     <MaiNBODY/>
   </div>
    <FBAR />
  </div>


  );
}

export default Home;
