import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        return (
            <div className="filter__box">
                <input type="text" className="filter__app" onKeyUp={this.props.getFilter} />
                <input type="text" className="filter__two" onKeyUp={this.props.newFilter}/>
            </div>
        );
    }
}

Filters.propTypes = {
    getFilter: PropTypes.func.isRequired
}
export default Filters;