import React from "react";

const List = () => {
  const numbers = ["one", "two", "three", "four", "five"];
  return (
    <div className="component-wrap list">
      <ul className="list-numbers">
        {numbers.map((number) => (
          <li className="list-item">{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
