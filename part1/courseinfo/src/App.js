import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const course = {
    name: "Half Stack application development ",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const suma = () => {
    let s = 0;
    course.parts.forEach((n) => {
      s = s + n.exercises;
    });
    return s;
  };

  return (
    <div className="App">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total number={suma()} />
    </div>
  );
}

export default App;
