import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    return (
      <div className = "filter_box">
        <h2>Harry Potter Characters</h2>
        <input type="text" onKeyUp={this.props.filter}/>
      </div>
    );
  }
}

Filters.propTypes = {
  filter: PropTypes.func.isRequired
};

export default Filters;