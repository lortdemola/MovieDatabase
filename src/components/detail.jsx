import React, {useState} from 'react';
import axios from 'axios';
import './css/DET.css';
import IM2 from './logo.svg'



const DETAILS  = (props) => {
    const [movie,setmovie] = useState([]);
    
    React.useEffect(() => {
       
       someFunction();
       },[]
      );
    

    const someFunction = () => {
      axios.get('https://at.usermd.net/api/movies/'+window.localStorage.getItem('nID'))
      .then((res) => {
        
        setmovie(res.data)
      })
    };
    
    return (
       <div class="backs">
        <img src={movie.image} width="30%" height="50%"  className="d-inline-block align-top" alt="movie image" class='splash_imgs'/>
        <div  >
      <div class='textcomp1s'>
        <label class='sizeLs' id="nameID">{movie.title}</label>
        <div class='textcomp1_2'>
          <label class='sizeSs'>{movie.content}</label>
        </div>
        
      </div>
    </div>
       </div>
    )
}

export default DETAILS;