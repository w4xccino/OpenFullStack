import { useEffect, useState } from "react";
import Person from "./components/Person";
import Input from "./components/AddData";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const promise = axios.get("http://localhost:3001/persons");
    promise.then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  const addNewPerson = (event) => {
    event.preventDefault();
    if (persons.filter((el) => el.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
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

  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter(
          (el) => el.name.toLowerCase().includes(filter.toLowerCase()) // easy way to search data
        );

  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <div>
        <Input
          value={filter}
          texto={"filter by name"}
          onChange={(value) => setFilter(value)}
        />
      </div>
      <h2>Add a New</h2>
      <div>
        <form onSubmit={addNewPerson}>
          <Input
            texto={"name"}
            placeholder={"Add New Name"}
            value={newName}
            onChange={(value) => setNewName(value)}
          />
          <Input
            texto={"number"}
            value={newNumber}
            placeholder={"Add New Number"}
            onChange={(value) => setNewNumber(value)}
          />
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
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
