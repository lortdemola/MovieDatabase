
import React, {useState} from 'react';

import './css/content.css';
import IMG from './logo.svg'



const MaiNBODY = (props) => {

  const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
  const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(0);
  const [value, setValue] = useState(0);
  const [firts, setfirst] = useState(0);

  React.useEffect(() => {
    setCommittedFieldsToAdd(20)
    setInputfieldsToAdd(parseInt(inputfieldsToAdd, 10))
    if(firts == 0 ){
      window.localStorage.clear();
      setfirst(1);
      
    }},[]
  );
  
  
  const someFunction = (b) => {
    window.localStorage.setItem('nID', b);
    window.location.href="/details";
  };

  const Field = ({ id }: { id: number }) => (
    <button id="pg" onClick={() =>someFunction(id)} class="back" >
  
    <img src={IMG} width="150vh" height="90%" className="d-inline-block align-top" alt="movie image" class='splash_img'/>
    <div class='comp' >
      <div class='textcomp1'>
        <label htmlFor={`field${id}`} class='sizeL' id="nameID">name {id}</label>
        <div>
          <label htmlFor={`field${id}` } class='sizeS'>angName {id} </label>
          <label htmlFor={`field${id}`} class='sizeSp'>  date {id}</label>
        </div>
      </div>
      <div class='textcomp2'> 
        <label htmlFor={`field${id}`} class='sizeM'>rateing {id}</label>
        <label htmlFor={`field${id}`} class='sizeS'>people count {id}</label>
      </div>
    </div>
  
  </button>
  );

   return (
    <div class='moviebody' >
      
      {/* {fields} */}
      {[...Array(committedFieldsToAdd)].map(
        (value: undefined, index: number) => (
          <Field id={index + 1} key={index} />
        )
      )}
      
    </div>
  )
  const swaper = document.getElementById('pg');
  const nameid = document.getElementById('nameID');
  swaper.addEventListener(onclick,function(e){
    e.preventDefault();
    const nid = nameid.value;

    localStorage.setItem('nID', nid);
  })
};

export default MaiNBODY;