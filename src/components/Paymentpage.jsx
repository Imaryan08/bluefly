import "./Payment.css";
import { useNavigate } from "react-router-dom";

function Paymentpage() {
  let navigate = useNavigate();

  return (
    <div
      style={{
        borderTop: "1px solid gray",
        marginBottom: "50px",
        marginTop: "30px",
      }}
    >
      <div id="fst">
        <div id="a1">
          <img
            id="im1"
            style={{ height: "20px", width: "20px" }}
            src={"https://img.icons8.com/material-outlined/72/back--v1.png"}
          />
          <div id="i1">Back</div>
        </div>
        <div id="a2">
          <img
            style={{ height: "93%", width: "100%" }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimpSzgQGtDqyD8x93cga5W2y0hUMhmxCvQg&usqp=CAU"
            }
          />
        </div>
      </div>
      <div id="sec1">
        
        <div id="sec2">
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://betacdn.razorpay.com/vasbanner.png"
          />
        </div>
        <div id="sec3">
          <div id="op">
            <div className="s2">
              {/* <button className="b1"></button> */}
              <br />
              <br />
              <div className="r6">Select a payment method</div>
            </div>
            <div id="s9">
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/office/2x/bank-card-front-side.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">HDFC Debit Card</div>
                  <div className="a6">All debit cards by HDFC Bank </div>
                </div>
              </div>
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/office/2x/bank-card-front-side.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">HDFC Credit Card</div>
                  <div className="a6">All credit cards by HDFC Bank </div>
                </div>
              </div>
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/office/2x/bank-card-front-side.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">Other Bank Debit Card</div>
                  <div className="a6">Visa, Mastercard, Maestro, Rupay </div>
                </div>
              </div>
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/color/2x/bank-card-back-side.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">Other Bank Credit Card</div>
                  <div className="a6">Visa, Mastercard, Amex</div>
                </div>
              </div>
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/office/2x/bank-card-front-side.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">HDFC Netbanking</div>
                  <div className="a6">Pay with HDFC Netbanking Account</div>
                </div>
              </div>
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/office/2x/bank-card-front-side.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">PayLater</div>
                  <div className="a6">Pay using PayLater </div>
                </div>
              </div>
              <div>
                <div className="c1">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://img.icons8.com/ios-filled/2x/bhim-upi.png"
                  />
                </div>
                <div className="c2">
                  <div className="a5">UPI</div>
                  <div className="a6">
                    Pay using BHIM, Tez and other UPI apps
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="input">
            <div className="s2">
              <div className="r4">Amount payable is</div>
              <div id="r5">₹0</div>
              <br />
              {/* <button className="b1"></button> */}
            </div>
            <div id="s3">
              <p className="r6">Pay with HDFC Debit Card</p>
              <label className="k1">Card Number</label>
              <br />
              <input type="number" id="cno" className="no" />
              <br />

              <div id="s4">
                <div id="s5">
                  {" "}
                  <label className="k1">Expiry Date</label>
                  <br />
                  <input
                    type="date"
                    style={{ width: "140px" }}
                    id="exp"
                    className="da"
                  />
                </div>
                <div id="s6">
                  <label className="k1">CVV</label>
                  <br />
                  <input
                    type="number"
                    id="cvv"
                    className="a1"
                    placeholder="***"
                  />
                </div>
              </div>
              <br />
              <label className="k1">Cardholder's Name</label>
              <br />
              <input type="text" id="name" className="no" />
              <br />
              <br />
              <button
                id="b3"
                onClick={() => {
                  alert("Payment successful");
                  navigate("/");
                }}
              >
                Pay Now
              </button>
              <br />
              <br />
              <br />
              <h4 id="a3">Cancel Payment</h4>
              <br />
              <br />
              <br />
              <br />

              <div id="s7">
                <p>Powered By</p>
                <div id="k4">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="data:image/png;base64,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"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dig">
        <div id="dig1">
          {" "}
          Your transaction is processed through a secure 128-bit HTTPS Internet
          connection.
        </div>
        <div id="dig2">
          <img
            style={{ height: "20px", width: "350px" }}
            src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Paymentpage;
