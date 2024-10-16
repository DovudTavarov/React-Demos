export const TwoWayBinding = ({ value, onChange }) => {
  return (
    <div>
      <input
        style={{
          width: "300px",
          padding: "10px 20px",
          fontSize: "20px",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
        type="text"
        value={value}
        onChange={onChange}
      />
      <p>{value}</p>
    </div>
  );
};
