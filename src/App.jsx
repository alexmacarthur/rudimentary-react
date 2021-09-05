import React, { useState } from 'react';

// principle
// time
// annual interest rate
// number of times compounded per time
const compound = (p, t = 1, r = .08, n = 12) => {
  return p * (Math.pow((1 + (r / n)), (n * t)));
};

function NameTag(props) {
  return (
    <h2>{props.name}</h2>
  )
}

function Compounder({principle}) {
  const clickHandler = () => {
    console.log(compound(principle));
  }

  return (
    <div>
      <span>
        {principle}
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
    <Compounder principle={3} />
  )
}

export default App;
