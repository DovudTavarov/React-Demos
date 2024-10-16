export const LightSwitch = ({ lightStatus, switchingLight }) => {
  return (
    <>
      {lightStatus ? (
        <img
          onClick={switchingLight}
          src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
          alt=""
        />
      ) : (
        <img
          onClick={switchingLight}
          src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
          alt=""
        />
      )}
    </>
  );
};
