import React from "react";

const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}
      <sup>2</sup>
    </p>
    <p className="exponent-result">
      {count}*{count} = <span className="total">{count * count}</span>
    </p>
  </div>
);

export default ExponentTwo;
