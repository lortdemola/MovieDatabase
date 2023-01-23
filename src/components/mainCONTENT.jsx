
import React, {useState} from 'react';

import './css/content.css';
import IMG from './logo.svg'
import axios from 'axios';
import { wait } from '@testing-library/user-event/dist/utils';


const MaiNBODY = (props) => {

  
  const [movies,setMovies] = useState([]);
  const [idUS,setidUS] = useState('');
  const [value, setValue] = useState(false);
  const [firts, setfirst] = useState(0);

  React.useEffect(() => {
    getmovies()
    //window.localStorage.removeItem('userID');
   
    setValue(iflogin())
    if(firts == 0 ){
      setfirst(1);
      
    }
    
      
  },[]
  );
  const iflogin = () =>{
    const s =  window.localStorage.getItem('userID'); 
    if(s!=null){
      if(s != ''){
        return true
      }else{
        return false
      } 
    }
    else{
      return false
    }
    
    
    
  };
  const getmovies = () => {
    axios.get(`https://at.usermd.net/api/movies`)
    .then((res) => {
      
      setMovies(res.data);
    })
  };
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  const desctiption = (b) => {
    
    window.localStorage.setItem('nID', b);
    window.location.href="/details";
  };
  const del= async (b) => {
    axios.delete('https://at.usermd.net/api/movie/'+b)
    .then((res) => {
      console.log(res);
    })
    await delay(1000);
    window.location.reload();
  };

    const Field = ({ id,title,image,cont }: { id: number, title:string,image:string,cont:string }) => (
    <button id="pg" onClick={() =>desctiption(id)} class="back" >
  
    <img src={image} width="150vh" height="250vh" className="d-inline-block align-top" alt="movie image" class='splash_img'/>
    <div class='comp' >
      <div class='textcomp1'>
        <label htmlFor={`field${id}`} class='sizeL' id="nameID">{title}</label>
        <div>
          <label htmlFor={`field${id}` } class='sizeS'>{cont}</label>
        </div>
      </div>
      
    </div>
  
  </button>);
  
  if(window.localStorage.getItem('role') == 'admin'){
   return (
    <div class='moviebody' >
      
      {/* {fields} */}
      {movies.map(
        (value: undefined, index: number) => (
          <div style = {{display: 'flex' ,flexDirection: 'column' }}>
          <Field id={movies[index].id} title={movies[index].title} image={movies[index].image} cont={movies[index].content}  key={index} />
          <button id="pg" onClick={() =>del(movies[index].id)} class="del" >delete</button>
          </div>
          )
      )}
      
    </div>
  )}else{
    return (
      <div class='moviebody' >
        
        {/* {fields} */}
        {movies.map(
          (value: undefined, index: number) => (
            <div style = {{display: 'flex' ,flexDirection: 'column' }}>
            <Field id={movies[index].id} title={movies[index].title} image={movies[index].image} cont={movies[index].content}  key={index} />
            </div>
            )
        )}
        
      </div>
    )
  }
  const swaper = document.getElementById('pg');
  const nameid = document.getElementById('nameID');
  swaper.addEventListener(onclick,function(e){
    e.preventDefault();
    const nid = nameid.value;

    localStorage.setItem('nID', nid);
  })
};

export default MaiNBODY;