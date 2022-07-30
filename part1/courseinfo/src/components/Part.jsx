const Part = ({ name, number }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>There are {number}.</p>
      <hr />
    </div>
  );
};

export default Part;
