import React, {useState} from 'react';

import './css/DET.css';



const MADD  = (props) => {
    
    
    return (
        <form class="forms">
        <label class="rowFORM">Name:
          <input type="text" />
        </label>
        <label class="rowFORM">Ang. Name:
          <input type="text" />
        </label>
        <label class="rowFORM">Date:
          <input type="date" />
        </label>
        <label class="rowFORM">Description:
            <textarea id="w3review" name="w3review" rows="9" cols="20"></textarea>
        </label>
        <label class="rowFORM">Image:
        <input type="file" />
        </label>
        <input class="submitFORM" value={"Add Movie"} type="submit" />
        
      </form>
    )
}

export default MADD;