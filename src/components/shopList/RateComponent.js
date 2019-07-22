import React from 'react';

const RateComponent = ({ rate }) => {
    const renderRate = () => {
        let stars = []
        let cn
        for (let i = 0; i < 5; i++) {
            if (rate >= i + 1) {
                cn = "fa-star"
            } else {
                cn = "fa-star-o"
            }
            if (i + 1 - rate === 0.5) {
                cn = "fa-star-half-o"
            }
            stars.push(
                <i key={i} className={`fa ${cn} orange`} />
            )
        }
        return stars;
    }

    return (
        <span className="rating">
            {
                renderRate()
            }
        </span>
    )
}

export default RateComponent;