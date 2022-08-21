import { useState } from "react";
import Person from "./components/Person";

function App() {
  const people = [
    {
      name: "Arto Hellas",
      number: "040-1234567",
    },
  ];
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();
    if (persons.filter((el) => el.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const inputPersonHandler = (event) => {
    setNewName(event.target.value);
  };

  const inputNumberHandler = (event) => {
    setNewNumber(event.target.value);
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
          number:{" "}
          <input
            placeholder="Add new number here..."
            value={newNumber}
            onChange={inputNumberHandler}
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
