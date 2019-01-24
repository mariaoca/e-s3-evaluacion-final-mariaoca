import React, { Component } from 'react';


class CharacterCard extends Component {
    render() {
        return (
            <li className="item_list" key={this.props.item.id}>
                <div className="character">
                    <img className="character__img" src={this.props.item.image} alt={this.props.item.name} />
                    <h2 className="character__name">{this.props.item.name}</h2>
                    <p className="character__house">{this.props.item.house}</p>
                </div>
            </li>
        );
    }
}
export default CharacterCard;