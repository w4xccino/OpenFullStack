const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

//creating token
morgan.token("body", (req, res) => {
  const body = req.body;
  console.log(body);
  return JSON.stringify(body); //this converts JSON to string
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body") //calling tokens
);

//people's list
let persons = [
  {
    id: 1,
    name: "Arto Bellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

// Getting info from the phonebook
app.get("/info", (req, res) => {
  const info = `Phonebook has ${persons.length} people <p>${new Date()}</p>`;
  res.send(info);
});

// Getting the whole phonebook
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

// Getting an specific person from the phonebook
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = persons.find((el) => {
    return el.id === id;
  });

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

//Deleting an specific person from the phonebook
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((el) => {
    return el.id !== id;
  });
  res.status(204).end();
});

const randomNumberGenerator = () => {
  const number = Math.floor(Math.random() * 1000);
  return number;
};

// Adding a new user to the phonebook
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "You must fill the name and number",
    });
  } else if (persons.find((el) => el.name === body.name)) {
    return res.status(400).json({
      error: "Name must be unique",
    });
  }
  const person = {
    id: randomNumberGenerator(),
    name: body.name,
    number: body.number,
  };
  persons = persons.concat(person);
  res.json(persons);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
