import React, {Component} from "react";

class CharacterCard extends Component {
    render() {
        const {name} = this.props;
        return(
            <div className="character_card">
                <h2>Harry Potter Characters</h2>
                <ul className="character_list">
                    {name}
                </ul>

            </div>
        )
    }
}
export default CharacterCard;