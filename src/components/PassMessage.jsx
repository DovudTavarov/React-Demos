export const PassMessage = ({
  result,
  onSubmit,
  inputValue,
  onChange,
  onKeyPress,
}) => {
  return (
    <>
      <h1>A Message You Would Like To Pass</h1>
      <input
        style={{ width: "300px", padding: "10px 20px", fontSize: "20px" }}
        id="text"
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onSubmit} style={{ padding: "10px 20px" }} id="submit">
        Submit
      </button>
      <h1>Last Message Delivered</h1>
      <div id="result">{result}</div>
    </>
  );
};
