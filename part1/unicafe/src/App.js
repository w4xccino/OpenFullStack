import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
import "./styles/app.css";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);

  const goodClicked = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAvg(avg + 1);
  };

  const badClicked = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAvg(avg - 1);
  };

  const neutralClicked = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const getAvg = () => {
    return (avg / all).toFixed(1);
  };

  const getPositive = () => {
    return `${((good / all) * 100).toFixed(1)} %`;
  };

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <div className="buttons">
        <Button text="Good" handler={goodClicked} />
        <Button text="Neutral" handler={neutralClicked} />
        <Button text="Bad" handler={badClicked} />
      </div>
      <h2>Statistics</h2>
      {all === 0 && <p>No feedback given</p>}
      {all > 0 && (
        <div>
          <Statistics text={"Good"} value={good} />
          <Statistics text={"Neutral"} value={neutral} />
          <Statistics text={"Bad"} value={bad} />
          <Statistics text={"All"} value={all} />
          <Statistics text={"Average"} value={getAvg()} />
          <Statistics text={"Positive"} value={getPositive()} />
        </div>
      )}
    </div>
  );
}

export default App;
