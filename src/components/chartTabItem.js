import React from 'react';

const chartTabItem = props => (
    <div className="chartLi-container">
        <p className="chartItem-title">{props.liItems.chartItemTitle}</p>
        <p className="chartItem-count">{props.liItems.chartItemCount}</p>
        <p className="chartItem-secondcount">{props.liItems.chartItemSecondCount}</p>
        <p className="chartItem-additional">{props.liItems.chartItemAdditional}</p>
    </div>
);

export default chartTabItem;