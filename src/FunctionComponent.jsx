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
    <div>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <br />
      <button onClick={decrement}>-</button>
      {age}
      <button onClick={increment}>+</button>
      <br />
      <br />
      <div>
        My name is {name} and I am {age} years old.
      </div>
    </div>
  );
};

export default FunctionComponent;
