import { Button } from 'bootstrap';
import React, {useState} from 'react';

import './css/cont_SU.css';





const SIGNUP = (props) => { 
return (
    <form class="forms">
      <label class="rowFORM">Login:
        <input type="text" />
      </label>
      <label class="rowFORM">Nazwa:
        <input type="text" />
      </label>
      <label class="rowFORM">Email:
        <input type="text" />
      </label>
      <label class="rowFORM">Hasło:
        <input type="password" />
      </label>
      <input class="submitFORM" value={"Sign up"} type="submit" />
      
    </form>
)
};
export default SIGNUP;

