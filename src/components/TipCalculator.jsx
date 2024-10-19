export const TipCalculator = ({ totalTip, total }) => {
  return (
    <>
      <div className="tip-cont">
        <div className="tip-box">
          <div className="head">
            <h3>TIP CALCULATOR</h3>
          </div>
          <p>How much was your bill?</p>
          <label>$</label>
          <input id="amount" type="text" placeholder="Bill Amount" />
          <p>How was your service?</p>
          <select name="" id="tip">
            <option value="">-- Choose an Option --</option>
            <option value="0.3">30% - Outstanding</option>
            <option value="0.2">20% - Good</option>
            <option value="0.15">15% - It was OK</option>
            <option value="0.1">10% - Bad</option>
            <option value="0.05">5% - Terrible</option>
          </select>
          <p>How many people are sharing the bill?</p>
          <input id="people" type="text" placeholder="Number of Peaopple" />
          <span>people</span>
          <br />
          <button onClick={totalTip} id="tip-btn">
            CALCULATE!
          </button>
          <div id="totalTip">
            Tip amount <br />${total} <br />
            each
          </div>
        </div>
      </div>
    </>
  );
};
