import React, {useState} from 'react';
import './css/content.css';
import IMG from './logo.svg'

const MaiNBODY = (props) => {

  const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
  const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(0);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    setCommittedFieldsToAdd(9)
    setInputfieldsToAdd(parseInt(inputfieldsToAdd, 10))},[]
  );

  const Field = ({ id }: { id: number }) => (
  <div class='back' >
    <img src={IMG} width="150vh" height="90%" className="d-inline-block align-top" alt="movie image" class='splash_img'/>
    <div class='comp' >
      <div class='textcomp1'>
        <label htmlFor={`field${id}`} class='sizeL'>name {id}</label>
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
  </div>
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
};

export default MaiNBODY;