import React from 'react';

const OptionsComponent = ({ name, value }) => {
    return (
        <span className="option">
            {name}: {value === 'y' ? <i className="fa fa-check green" /> : <i className="fa fa-times red"></i>}
        </span>
    )
}

export default OptionsComponent;