import React, { Component } from 'react';
import {fetchCharacters} from './services/Characterservice';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
//import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter:''
    };
    this.getFilter = this.getFilter.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  filterList(){
    const {characters, filter} = this.state;
    return characters.filter(item => item.name.toUpperCase().includes(filter.toUpperCase()));
  }

  getFilter(e){
    const query = e.currentTarget.value;
    this.setState({
      filter:query
    });
  }
  

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters()
      .then( data => {
        const newCharacters = data.map((item,index)=>{
          return {...item,id:index};
        });
        this.setState({
          characters: newCharacters
        });
      })
  }
  
  

 render() {
   //const {filter} = this.state;
   return(
     <div className="App">
       <header className="app_header">
         <h1 className="app__title">Harry Potter Characters</h1>
       </header>
        < Filters getFilter={this.getFilter} />
        < CharacterList filterList={this.filterList} />
     </div>
   );
 }
}
export default App;



