import React, { useState } from "react";
import SimpleInvoice from "./examples/SimpleInvoice";
import ComplexInvoice from "./examples/ComplexInvoice";
import { compound } from "./utils";

function NameTag(props) {
  return <h2>{props.name}</h2>;
}

function Compounder({ principle, rate = 0.08 }) {
  const [calculation, setCalculation] = useState(principle);

  const clickHandler = () => {
    const newValue = compound({
      principle: calculation,
      time: 1,
      rate,
      number: 12,
    });
    setCalculation(newValue);
  };

  return (
    <div>
      <span>{calculation}</span>
      <br />
      <button onClick={clickHandler}>Compound</button>
    </div>
  );
}

function App() {
  return (
    // <NameTag name={"Alex"} />
    // <Compounder principle={3} rate={1.12} />
    <SimpleInvoice />
    // <ComplexInvoice />
  );
}

export default App;
