import { useState } from "react";

const FunctionComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function decrement() {
    setAge((currentAge) => {
      return currentAge - 1;
    });
  }

  function increment() {
    setAge((currentAge) => {
      return currentAge + 1;
    });
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={decrement}>-</button>
      {age}
      <button onClick={increment}>+</button>
      <br />
      <br />
      <h1>
        My name is {name} and I am {age} years old.
      </h1>
    </>
  );
};

export default FunctionComponent;
