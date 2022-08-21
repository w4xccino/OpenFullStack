const AddData = ({ texto, placeholder, onChange, value }) => {
  const eventHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <span>{texto}: </span>
      <input placeholder={placeholder} onChange={eventHandler} value={value} />
    </div>
  );
};
export default AddData;

//falta factorizar componentes, definir padres e hijos
