import React from "react";
import PropTypes from "prop-types";

import "./counter.sass";

export const Count = ({ count }) =>
    <div className="count">{count}</div>;

Count.propTypes = {
    count: PropTypes.number.isRequired
};

export const Counter = ({ count, onUp, onDown }) =>
    <div className="counter">
        <button className="arrow" onClick={onUp}>
            <i className="fa fa-arrow-up" />
        </button>
        <Count count={count} />
        <button className="arrow" onClick={onDown}>
            <i className="fa fa-arrow-down" />
        </button>
    </div>;

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onUp: PropTypes.func.isRequired,
    onDown: PropTypes.func.isRequired
};

export default Counter;