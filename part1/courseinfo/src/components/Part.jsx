const Part = ({ name, number }) => {
  return (
    <div>
      <p>
        <b>{name} </b>
        {number}.
      </p>
    </div>
  );
};

export default Part;
