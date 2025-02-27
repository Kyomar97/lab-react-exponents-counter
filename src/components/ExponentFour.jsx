import React from "react";

const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}
      <sup>4</sup>
    </p>
    <p className="exponent-result">
      {count}* {count}* {count}*{count} ={" "}
      <span className="total">{count * count * count * count}</span>
    </p>
  </div>
);
export default ExponentFour;
