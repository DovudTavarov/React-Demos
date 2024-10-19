export const VotingSystem = ({
  increaseBarcelonaVotes,
  increaseJuventusVotes,
  increaseManUnitedVotes,
  barcelonaVotes,
  juventusVotes,
  manUnitedVotes,
}) => {
  return (
    <>
      <div className="voting-cont">
        <div className="voting-box">
          <img
            width={200}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
            alt=""
          />
          <h4>FC Barcelona</h4>
          <button onClick={increaseBarcelonaVotes} id="voting-btn">
            Vote
          </button>
          <hr />
          <p>
            Vote count: <span id="voting-count">{barcelonaVotes}</span>
          </p>
        </div>
        <div className="voting-box">
          <img
            width={130}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg"
            alt=""
          />
          <h4>Juventus F.C.</h4>
          <button onClick={increaseJuventusVotes} id="voting-btn2">
            Vote
          </button>
          <hr />
          <p>
            Vote count: <span id="voting-count2">{juventusVotes}</span>
          </p>
        </div>
        <div className="voting-box">
          <img
            width={200}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
            alt=""
          />
          <h4>Manchester United F.C.</h4>
          <button onClick={increaseManUnitedVotes} id="voting-btn3">
            Vote
          </button>
          <hr />
          <p>
            Vote count: <span id="voting-count3">{manUnitedVotes}</span>
          </p>
        </div>
      </div>
    </>
  );
};
