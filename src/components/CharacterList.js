import React, { Component } from 'react';
import CharacterCard from './CharacterCard'


class CharacterList extends Component {
    render() {
        return (
            <ul className="app__list">
            {this.props.filterList().map(item => {
                return (
                   <CharacterCard item={item}/>
                );
            })}
        </ul>
        );
    }
}
export default CharacterList;