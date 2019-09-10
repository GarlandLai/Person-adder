import React from 'react';
import Person from './Person'

function AddedList(props) {
  console.log(props);
  return (
    <div>
    <h3>Added List</h3>
    <ul>
    {props.addedList.map((person, index) =>
      <Person name={person.name}
      onSelectPerson={(id) => props.onSelectPerson(id)}
      id={index}
      key={index}/>
    )}
    </ul>
    </div>
  );
}

export default AddedList;
