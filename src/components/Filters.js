import React, {Component} from "react";

class Filters extends Component {
    render() {
        return (
            <div className="filter__box">
                <input type="text" className="filter__app" onKeyUp={this.props.getFilter} />
            </div>
        );
    }
}

export default Filters;