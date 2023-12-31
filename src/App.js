import { useEffect, useState } from "react";
import "./App.css";

function App() {
  async function generateAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log(advice.slip.advice);
    setAdvice(advice.slip.advice);
    setId(advice.slip.id);
  }

  useEffect(() => {
    generateAdvice();
  }, []);

  const [id, setId] = useState(0);
  const [advice, setAdvice] = useState("");

  return (
    <div className="App">
      <div className="advice">
        <p className="adviceId"> ADVICE #{id}</p>

        <div className="theAdvice">
          <q> {advice}</q>
        </div>

        <div className="btnGenerate" onClick={() => generateAdvice()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M300.118-250Q321-250 335.5-264.618q14.5-14.617 14.5-35.5Q350-321 335.382-335.5q-14.617-14.5-35.5-14.5Q279-350 264.5-335.382q-14.5 14.617-14.5 35.5Q250-279 264.618-264.5q14.617 14.5 35.5 14.5Zm0-360Q321-610 335.5-624.618q14.5-14.617 14.5-35.5Q350-681 335.382-695.5q-14.617-14.5-35.5-14.5Q279-710 264.5-695.382q-14.5 14.617-14.5 35.5Q250-639 264.618-624.5q14.617 14.5 35.5 14.5Zm180 180Q501-430 515.5-444.618q14.5-14.617 14.5-35.5Q530-501 515.382-515.5q-14.617-14.5-35.5-14.5Q459-530 444.5-515.382q-14.5 14.617-14.5 35.5Q430-459 444.618-444.5q14.617 14.5 35.5 14.5Zm180 180Q681-250 695.5-264.618q14.5-14.617 14.5-35.5Q710-321 695.382-335.5q-14.617-14.5-35.5-14.5Q639-350 624.5-335.382q-14.5 14.617-14.5 35.5Q610-279 624.618-264.5q14.617 14.5 35.5 14.5Zm0-360Q681-610 695.5-624.618q14.5-14.617 14.5-35.5Q710-681 695.382-695.5q-14.617-14.5-35.5-14.5Q639-710 624.5-695.382q-14.5 14.617-14.5 35.5Q610-639 624.618-624.5q14.617 14.5 35.5 14.5ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
