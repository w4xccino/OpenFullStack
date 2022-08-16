const Part = ({ name, number }) => {
  return (
    <div>
      <b>{name}</b>
      <p>There are {number}.</p>
    </div>
  );
};

export default Part;
