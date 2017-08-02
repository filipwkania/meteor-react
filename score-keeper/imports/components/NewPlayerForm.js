import React from 'react';

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>  
      <input type="text" name="name" placeholder="player's name" defaultValue=''/>
      <input type="text" name="score" placeholder="score" defaultValue=''/>
      <button type="submit">Add player</button>
    </form>
  );
}