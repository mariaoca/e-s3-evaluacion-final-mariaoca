import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import {fetchCharacters} from './services/Characterservice';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CardDetail from './components/CardDetail';
import './stylesheets/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter: '',
      filterHouse: ''
    };
    this.getFilter = this.getFilter.bind(this);
    this.filterList = this.filterList.bind(this);
    this.newFilter = this.newFilter.bind(this);
  }
  filterList() {
    const { characters, filter } = this.state;
    return characters.filter(item => item.name.toUpperCase().includes(filter.toUpperCase()));
  }

  getFilter(e) {
    const query = e.currentTarget.value;
    this.setState({
      filter: query
    });
  }

  newFilter(e) {
    const query = e.currentTarget.value;
    this.setState({
      filterHouse:query
    });
  }  

  filterHouse () {
    const {characters,filterHouse} = this.state;
    if (filterHouse === 'no'){
      return characters.filter(item => item.house === '')
    }
    return characters.filter(item => item.house.toUpperCase().includes(filterHouse.toUpperCase()));
  }


  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters()
      .then(data => {
        const newCharacters = data.map((item, index) => {
          return { ...item, id: index };
        });
        this.setState({
          characters: newCharacters
        });
      })
  }



  render() {
    return (
      <div className="App">
        <header className="app_header">
          <h1 className="app__title">Harry Potter Characters</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => (
            <Fragment>
              <Filters getFilter={this.getFilter}  newFilter={this.newFilter}/>
              <CharacterList filterList={this.filterHouse()}  />
            </Fragment>
          )} />
          <Route path="/character/:id" render={props => <CardDetail match={props.match} characters={this.state.characters} />} />
        </Switch>
      </div>
    );
  }
}
export default App;



