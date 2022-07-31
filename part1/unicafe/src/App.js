import { useState } from "react";
import Button from "./components/Button";
import "./styles/app.css";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClicked = () => {
    setGood(good + 1);
  };
  const badClicked = () => {
    setBad(bad + 1);
  };
  const neutralClicked = () => {
    setNeutral(neutral + 1);
  };
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <div className="buttons">
        <Button text="Good" handler={goodClicked} />
        <Button text="Neutral" handler={neutralClicked} />
        <Button text="Bad" handler={badClicked} />
      </div>
      <h2>Stadistics</h2>
      <p>
        Good: <b>{good}</b>
      </p>
      <p>
        Neutral: <b>{neutral}</b>
      </p>
      <p>
        Bad: <b>{bad}</b>
      </p>
    </div>
  );
}

export default App;
