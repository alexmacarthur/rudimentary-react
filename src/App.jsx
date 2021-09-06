import React, { useState } from 'react';

const compound = ({principle, time, rate, number}) => {
  return principle * (Math.pow((1 + (rate / number)), (number * time)));
};

function NameTag(props) {
  return (
    <h2>{props.name}</h2>
  )
}

function Compounder({ principle, rate = .08 }) {
  const [calculation, setCalculation] = useState(principle);

  const clickHandler = () => {
    const newValue = compound({
      principle: calculation,
      time: 1,
      rate,
      number: 12
    });
    setCalculation(newValue);
  }

  return (
    <div>
      <span>
        {calculation}
      </span>
      <br/>
      <button onClick={clickHandler}>
        Compound
      </button>
    </div>
  );
}

function App () {
  const someName = "Buford";

  return (
    // <NameTag name={someName} />
    <Compounder principle={3} rate={1.12} />
  )
}

export default App;
