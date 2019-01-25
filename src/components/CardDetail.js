import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



class CardDetail extends Component {
    render() {
        const {characters} = this.props;
        const characterId = this.props.match.params.id;

        if (characters.length > 0 && characterId < characters.length) {
            const mycharacter = characters[characterId];
            const {name, house, yearOfBirth, patronus, image, alive} = mycharacter;

            return (
                <div className="card">
                    <img src={image} alt={name} className="card__img" />
                    <h2 className="card__name">{name}</h2>
                    <p className="card__house">{`Casa: ${house}`}</p>
                    <p className="card__year">{`Año de nacimiento: ${yearOfBirth}`}</p>
                    <p className="card__patronus">{`Patronus: ${patronus}`}</p>
                    <p className="card__alive">{`Estado:${(alive) ? ' vivo' : ' falleció'}`}</p>
                    <Link className="link__back" to="/">Atrás</Link>
                </div>


            )
        } else {
            return (
                <Fragment>
                    <p className="no_dates">Sin datos</p>
                    <Link className="link__back" to="/">Atrás</Link>
                </Fragment>
            );
        }
    }
}

CardDetail.proptype = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    characterId: PropTypes.object.isRequired
}
export default CardDetail;