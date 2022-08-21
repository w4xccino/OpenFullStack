import { useState } from "react";
import Person from "./components/Person";

function App() {
  const people = [
    {
      name: "Arto Hellas",
      number: "040-1234567",
    },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ];
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");

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

  const inputFilterHandler = (event) => {
    setFilter(event.target.value);
  };
  const personsToShow =
    showAll && filter.length === 0
      ? persons
      : persons.filter(
          (el) => el.name.toLowerCase().includes(filter.toLowerCase()) // easy way to search data
        );

  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <div>
        filter by name:
        <input value={filter} onChange={inputFilterHandler} />
      </div>
      <h2>Add a New</h2>
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
      {personsToShow.map((el) => {
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
