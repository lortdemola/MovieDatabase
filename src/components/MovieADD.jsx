import React, {useRef,useEffect,useState} from 'react';
import axios from 'axios';
import './css/DET.css';



const MADD  = (props) => {
    
  const [Name, setName] = useState('');
  const [iMG, setiMG] = useState('');
  const [descript, setdescript] = useState('');
 

  const handleSubmit = async (e) => {
     console.log(Name+" "+iMG+" "+descript)
    await axios.post('https://at.usermd.net/api/movies', {
      title: Name,
      image: iMG,
      content:descript
    })
    .then(function (response) {
      console.log(response);
      window.location.href="/";
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
      <form class="forms" onSubmit={handleSubmit}>
      <label class="rowFORM">Name:
        <input  id="w1review" name="w1review"
          type="text"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={Name}
          required
          />
      </label>
      <label class="rowFORM">Image link:
        <input id="w2review" name="w2review"
        type="text"
        autoComplete="off"
        onChange={(e) => setiMG(e.target.value)}
        value={iMG}
        required
        />
      </label>
      <label class="rowFORM">Description:
          <textarea id="w3review" name="w3review" rows="9" cols="23"
          type="text"
          autoComplete="off"
          onChange={(e) => setdescript(e.target.value)}
          value={descript}
          required
          />
      </label>
      <input class="submitFORM" value={"Add Movie"} type="submit" />
      
    </form>
  )
}

export default MADD;