import React, {Component} from "react";
//import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

class CharacterList extends Component{
    render () {
        return(
            <ul className="characters_list">
                {this.props.list.map(item => {
                    return(
                        <li className = "list_item" key={item.id}>
                           <CharacterCard  name={item.name}/>
                        </li>
                    );
                })}

            </ul>
        );
    }
}
export default CharacterList;