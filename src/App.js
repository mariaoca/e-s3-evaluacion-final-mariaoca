import React, { Component } from 'react';
import {fetchCharacters} from './services/Characterservice';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    
  return (
      <div className="App">
        <h2 className="app_title">Harry Potter Characters</h2>
        <label />
        <input />
      </div>
    );
  }
}

export default App;




