import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <div className="flex items-center space-x-4 text-black border-2 border-black p-2 w-28 ">
      <button
        onClick={decrement}
        className=" px-2 py-1  disabled:opacity-50"
        disabled={count <= 1}
      >
        -
      </button>
      <span className="text-lg">{count}</span>
      <button onClick={increment} className=" px-2 py-1 rounded">
        +
      </button>
    </div>
  );
};

export default Counter;
