export const Toggle = ({ imageStatus, showImage }) => {
  return (
    <>
      {imageStatus ? (
        <img
          width={500}
          src="https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash example"
        />
      ) : (
        <h1 id="text">Image is hidden</h1>
      )}
      <br />
      <button onClick={showImage}>ON/OFF</button>
    </>
  );
};
