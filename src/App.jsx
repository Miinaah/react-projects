import { useState } from "react";

function App() {
  const [cgpa, setCgpa] = useState("");
  const [result, setResult] = useState("");

  function checkCGPA() {
    if (Number(cgpa) >= 9 && Number(cgpa)<=10) {
      setResult("Outstanding");
    }else if(Number(cgpa>=8 && Number(cgpa<9)))
    {
      setResult("Excellent");
    }else if(Number(cgpa)>=7 && Number(cgpa)<8)
    {
      setResult("Good");
    }
     else {
      setResult("Need Improvement!");
    }
  }

  return (
    <div>
      <h1>CGPA CHECKER</h1>

      <input
        type="number"
        placeholder="Enter CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />

      <br />
      <br />

      <button onClick={checkCGPA}>
        Click
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;