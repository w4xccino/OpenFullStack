import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
function App() {
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const getRandom = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };
  const toVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
  };
  const getMax = () => {
    const copy = { ...votes };
    const empty = [];
    Object.keys(copy).map((key) => {
      return empty.push(copy[key]);
    });
    const maxNum = Math.max(...empty);
    return empty.indexOf(maxNum);
  };

  return (
    <div className="App">
      <div className="anecdote">
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <b>Has {votes[selected]} points</b>
      </div>
      <div className="buttons">
        <Button text={"Vote"} handler={toVote} />
        <Button text={"Next anecdote"} handler={getRandom} />
      </div>
      <h2>Anecdote with most votes</h2>
      <div>
        <p>{anecdotes[getMax()]}</p>{" "}
      </div>
    </div>
  );
}

export default App;
