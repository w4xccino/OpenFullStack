import { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  const people = [
    {
      id: 1,
      name: "Arto Hellas",
    },
  ];
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");
  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers: </h2>
      {persons.map((el) => {
        return (
          <ul key={el.id}>
            <Person person={el} />
          </ul>
        );
      })}
    </div>
  );
}

export default App;
