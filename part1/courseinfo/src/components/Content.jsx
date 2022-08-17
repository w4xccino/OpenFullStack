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
      {parts.map((el) => {
        return (
          <div key={el.id}>
            <Part name={el.name} number={el.exercises} />
          </div>
        );
      })}
      <Total number={sum()} />
    </div>
  );
};
export default Content;
