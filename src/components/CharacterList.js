import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';


class CharacterList extends Component {
    render() {
        return (
            <ul className="app__list">
                {this.props.filterList().map(item => {
                    return (
                        <li className="item_list" key={item.id}>
                            <Link to={`/character/${item.id}`}>
                                <CharacterCard item={item} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
export default CharacterList;