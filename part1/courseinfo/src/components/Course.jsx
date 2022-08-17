import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      <div className="header">
        {course.map((el, idx) => {
          return (
            <div key={el.id}>
              <div>
                <Header key={idx} course={el.name} />
              </div>
              <div>
                <Content parts={el.parts} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Course;
