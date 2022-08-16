import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <div className="header">
        {course.map((el, idx) => {
          return <Header key={idx} course={el.name} />;
        })}
      </div>
      <div className="content">
        {course.map((el, idx) => {
          return <Content key={idx} course={el.name} />;
        })}
      </div>
    </div>
  );
};
export default Course;
