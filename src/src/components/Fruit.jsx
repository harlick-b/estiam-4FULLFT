import React from "react";

const Fruit = (props) => {
  const { name, prices, avg } = props;

  return (
    <ul>
      <li>{name}</li>
      <p>prices:</p>
      {prices.length > 0 && (
        <ul>
          {prices.map((price, i) => <li key={i}>{price}</li>)}
        </ul>
      )}
      <p>average: {avg(prices) || 'N/A'}</p>
    </ul>
  )
};

export default Fruit;
