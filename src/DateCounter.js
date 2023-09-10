import { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date("10-9-2023").toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      {/* STEPS */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => setStep((s) => s - 1)}> Subtract </button>
        <h3> Steps : {step} </h3>
        <button onClick={() => setStep((s) => s + 1)}> Add </button>
      </div>

      {/* +/- FUNCTION */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={ () => (setCount((s) => count - step))}> Subtract </button>
        <h3> Counts : {count} </h3>
        <button onClick={() => setCount((s) => count + step)}> Add </button>
      </div>

      <p> Message : {`${date}`} </p>
    </div>
  );
}
