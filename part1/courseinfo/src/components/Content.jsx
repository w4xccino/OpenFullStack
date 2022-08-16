import Part from "./Part";
import Total from "./Total";
const Content = ({ parts }) => {
  const sum = () => {
    let s = 0;
    parts.forEach((n) => {
      s = s + n.exercises;
    });
    return s;
  };
  // falta iterar aca porque no coinciden los indices, asi como tambien en el componente Course.jsx
  return (
    <div>
      <Part name={parts[0].name} number={parts[0].exercises} />
      <Part name={parts[1].name} number={parts[1].exercises} />
      <Part name={parts[2].name} number={parts[2].exercises} />
      <Total number={sum()} />
    </div>
  );
};
export default Content;
