import { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  const people = [
    {
      name: "Arto Hellas",
    },
  ];
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  const inputPersonHandler = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name:{" "}
          <input
            placeholder="Add new name here..."
            value={newName}
            onChange={inputPersonHandler}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers: </h2>
      {persons.map((el) => {
        return (
          <ul key={el.name}>
            <Person person={el} />
          </ul>
        );
      })}
    </div>
  );
}

export default App;
