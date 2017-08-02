import React from 'react';

export default function(props) {
  let id = props._id;
  return(
    <li key={id}>
      <div>  
        <div>
          Name: {props.name}
        </div>  
        <div>
          Score: {props.score}
        </div>
        <div>
          <button id={id} value="add" onClick={props.changeScore}> + </button>
          <button id={id} value="remove" onClick={props.changeScore}> - </button>
        </div>
        <button value={id} onClick={props.removePlayer}>Remove</button>
      </div>
    </li>
  );
}