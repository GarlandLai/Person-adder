import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import PersonList from './PersonList';
import ProfilePic from './ProfilePic';
import AddedList from './AddedList';
import Garland from '../img/garland.png';
import Alex from '../img/alex.jpg';
import Greg from '../img/greg.jpg';
import Mike from '../img/mike.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterPersonList: [ {name: "Garland", img: Garland},
                           {name: "Alex", img: Alex},
                           {name: "Greg", img: Greg}
                         ],
      masterAddedList: [ {name: "Mike", img: Mike}],
      selectedPerson: 0
    }
    this.handleAddPersonToList = this.handleAddPersonToList.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
  }

  handleAddPersonToList(id) {
    const selectPerson = id !== undefined ? id: this.state.selectPerson
    let newMasterAddedList = this.state.masterAddedList.slice();
    let newMasterPersonList = this.state.masterPersonList.slice();
    newMasterAddedList.push(this.state.masterPersonList[selectPerson]);
    newMasterPersonList.splice(selectPerson, 1);
    this.setState({
      masterAddedList: newMasterAddedList,
      masterPersonList: newMasterPersonList
    });
  }

  selectPerson(id) {
    console.log("li select", id);
    let newSelectedPerson = id;
    this.setState({selectedPerson: newSelectedPerson});
  }

  render() {
    return (
      <div className="App">
        <PersonList onSelectPerson={(id) => this.selectPerson(id)} onAddPersonToList={this.handleAddPersonToList} personList={this.state.masterPersonList} />
        <AddedList onSelectPerson={(id) => this.selectPerson(id)} addedList={this.state.masterAddedList} />
          {this.state.masterPersonList[this.state.selectedPerson] && <ProfilePic img={this.state.masterPersonList[this.state.selectedPerson].img} />}
      </div>
    );
  }
}

export default App;
