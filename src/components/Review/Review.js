import React from 'react';
import './review.css';

function Review({name, txt}) {
    return (
        <div className="review">
            <p className="review__message">{txt}</p>
            <span className="review__author">{name}</span>
        </div>
    )
}

export default Review
