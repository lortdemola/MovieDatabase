import React, {useState} from 'react';

import './css/DET.css';
import IM2 from './logo.svg'



const DETAILS  = (props) => {
    const [ID, setID] = useState(0);
    const getid = () =>{
        setID(window.localStorage.getItem('nID'));
    }
    React.useEffect(() => {
       getid();
       },[]
      );
    return (
       <div class="backs">
        <img src={IM2} width="50%" height="30%"  className="d-inline-block align-top" alt="movie image" class='splash_imgs'/>
        <div  >
      <div class='textcomp1s'>
        <label class='sizeLs' id="nameID">name {ID}</label>
        <div class='textcomp1_2'>
          <label class='sizeSs'>angName {ID}</label>
          <label class='sizeSps'>date {ID}</label>
        </div>
      </div>
      <div class='textcomp2s'> 
        <label  class='sizeMs'>rating {ID} </label> 
        <label  class='sizeSps'>people count {ID}</label>
      </div>
    </div>
       </div>
    )
}

export default DETAILS;