import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };

  return (
    <div>
      <h2>{value}</h2>
      <button
        type="button"
        className="btn"
        onClick={handleClick}
      >
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
