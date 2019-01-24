import React, { Component } from 'react';
import {fetchCharacters} from './services/Characterservice';
import Filters from './components/Filters';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      characters: []
    };
  }
   
  componentDidMount() {
    this.getCharacters();
  }
  getCharacters() {
    fetchCharacters()
      .then(data =>{
        const newCharacters = data.map((item,index)=>{
          return {...item,id:index};
        });
      this.setState({
        characters: newCharacters
      }); 
    });
  }
  filterMe() {
    const {characters, name} = this.state;

    return characters.filter(item => item.name.toUpperCase().includes(name.toUpperCase()));
  }
  getNameFilter(e) {
    const newName = e.currentTarget.value;
    this.setState({
      name: newName
    })
  }

  render() {
    
  return (
      <div className="App">
        <Filters filter={this.getNameFilter} />
      </div>
    );
  }
}

export default App;




