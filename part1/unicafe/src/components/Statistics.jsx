const Statistics = ({ text, value }) => {
  return (
    <div>
      <table>
        <tr>
          <td>{text}:</td>
          <td>{value}</td>
        </tr>
      </table>
    </div>
  );
};
export default Statistics;
