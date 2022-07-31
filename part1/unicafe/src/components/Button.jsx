const Button = ({ text, handler }) => {
  const styles = {
    marginLeft: "10px",
    padding: "5px",
  };
  return (
    <div>
      <button style={styles} onClick={handler}>
        {text}
      </button>
    </div>
  );
};
export default Button;
