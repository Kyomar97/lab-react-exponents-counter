import React from "react";

const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}
      <sup>5</sup>
    </p>
    <p className="exponent-result">
      {count} * {count} * {count} * {count} * {count} ={" "}
      <span className="total">{count * count * count * count * count}</span>
    </p>
  </div>
);

export default ExponentFive;
