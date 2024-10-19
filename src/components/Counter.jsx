export const Counter = ({
  counter,
  counterIncrease,
  counterDecrease,
  counterReset,
}) => {
  return (
    <>
      <h1>Counter</h1>
      <div
        style={{ marginBottom: "20px", fontSize: "100px" }}
        className={
          counter < 0 ? "red" : "green" && counter === 0 ? "zero" : "green"
        }
      >
        {counter}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={counterDecrease}>DECREASE</button>
        <button onClick={counterReset}>RESET</button>
        <button onClick={counterIncrease}>INCREASE</button>
      </div>
    </>
  );
};
