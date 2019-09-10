import React from 'react';
import Person from './Person';
import PropTypes from 'prop-types';

function PersonList(props) {
  console.log('list', props.personList);
    return(
      <div>
        <h3>Person List</h3>
        <ul>
        {props.personList.map((person, index) =>
          <Person name={person.name}
          onSelectPerson={(id) => props.onSelectPerson(id)}
          onAddPersonToList={props.onAddPersonToList}
          img={person.img}
          id={index}
          key={index}/>
        )}
        </ul>
      </div>
    );
}

PersonList.propTypes = {
  personList: PropTypes.array,
  onAddPersonToList: PropTypes.func,
  onSelectPerson: PropTypes.func
};

export default PersonList;
