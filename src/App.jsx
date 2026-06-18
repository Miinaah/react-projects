import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function checkBMI() {
    let bmi=weight/(height*height);
    if (Number(bmi) < 18.5)
      {
        setResult("Under Weight");
      }
    else if (Number(bmi) < 25)
      {
        setResult("Normal Weight");
      }
    else if (Number(bmi) < 30)
      {
        setResult("Over Weight");
      }
    else
      {
        setResult("Obese");
      }
  }

  return (
    <div>
      <h1>BMI CALCULATOR</h1>

      <input
        type="number"
        placeholder="Enter Height in decimals"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br />
      <br />

      <button onClick={checkBMI}>
        Click
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;