import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  return (
    <li >
    <button onClick={() => props.onAddPersonToList(props.id)}>+</button>
    <a href="#" onClick={() => props.onSelectPerson(props.id)}>{props.name}</a>
    </li>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  onAddPersonToList: PropTypes.func,
  onSelectPerson: PropTypes.func
};

export default Person;
