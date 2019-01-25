import React, {Component} from 'react';
import PropTypes from 'prop-types';



class CharacterCard extends Component {
    render() {
        return (
            <div className="character__box">
                <img className="character__img" src={this.props.item.image} alt={this.props.item.name} />
                <h2 className="character__name">{this.props.item.name}</h2>
                <p className="character__house">{this.props.item.house}</p>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    item: PropTypes.object.isRequired,

}
export default CharacterCard;