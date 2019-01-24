import React, { Component } from 'react';
import {fetchCharacters} from './services/Characterservice';
//import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter:''
    };
    this.getFilter = this.getFilter.bind(this);
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
   //const {characters} = this.state;
   return(
     <div className="App">
       <h1 className="app__title">Harry Potter Characters</h1>
       <input  type="text" className="filter__app" onKeyUp={this.getFilter}/>
        <ul className="app__list">
          {this.filterList().map(item => {
            return (
              <li className="item_list" key={item.id}>
                <div className="character">
                  <img className="character__img" src={item.image} alt={item.name} />
                  <h2 className="character__name">{item.name}</h2>
                  <p className="character__house">{item.house}</p>
                </div>
              </li>
            );
          })}
        </ul> 
     </div>
   );
 }
}
export default App;



