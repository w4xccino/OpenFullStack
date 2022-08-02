const Button = ({ text, handler }) => {
  const styles = {
    margin: "10px",
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
