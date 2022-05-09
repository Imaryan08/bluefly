import React from "react";
import "./Imformation.css";
import { Item } from "./Cart";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Imformation = (props) => {
  const { cart, onAdd, onRemove } = props;
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  let navigate = useNavigate();

  return (
    <div className="shipping">
      <div id="top_nav">
        {/* <img
          id="image_logo"
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?181096"
          width="13%"
          height="10%"
          alt=""
        /> */}

        <div id="information" style={{ marginTop: "8%" }}>
          <div className="d1" style={{ padding: "5px", height: "38px" }}>
            Shop PAY
          </div>
          <div className="d2" style={{ padding: "5px", height: "38px" }}>
            PayPal
          </div>
          <div className="d3" style={{ padding: "5px", height: "38px" }}>
            G Pay
          </div>
        </div>
      </div>
      <div id="lower_det">
        <div id="cart_left">
          <p style={{ marginLeft: "-150px", marginBottom: "-15px" }}>
            Contact information
          </p>
          <br />
          <input
            id="width"
            class="eMail"
            type="text"
            placeholder="Email"
          />{" "}
          <br />
          <br />
          <div id="topmsg">
            <p style={{ marginLeft: "40px" }}>
              <input type="checkbox" />
              Keep me up to date on news and exclusive offers through all
              channels of communication, including WhatsApp. For more details
              click here
            </p>
          </div>{" "}
          <br />
          <br />
          <p style={{ marginLeft: "-150px", marginBottom: "10px" }}>
            Shipping address
          </p>
          <select id="width" name="Country/India">
            <option value="">India</option>
          </select>
          <br />
          <br />
          <input id="name_info" type="text" placeholder="First name" />
          <input
            class="last"
            id="name_info"
            type="text"
            placeholder="Last name"
          />
          <br />
          <br />
          <input id="width" class="userAdd" type="text" placeholder="Address" />
          <br />
          <br />
          <input id="width" type="text" placeholder="Appartment" />
          <br />
          <br />
          <input id="city_add" type="text" placeholder="City" />
          <input id="city_add" type="text" placeholder="State" />
          <input id="city_add" type="text" placeholder="Pin code" />
          <br />
          <br />
          <div id="phone_info">
            In case we need to contact you about your order
          </div>
          <input id="widt" type="number" class="phno" placeholder="Phone" />
          <br />
          <br />
          <input type="checkbox" style={{ marginLeft: "-260px" }} /> Save this
          information for next time <br />
          <br />
          <button id="button_shipping" onClick={() => {navigate("/pay")}}>Continue to shipping</button>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          {/* <div id="extra_item">
            Refund &nbsp; &nbsp; Shipping policy &nbsp; &nbsp; Privacy policy
            &nbsp; &nbsp; Terms of service
          </div> */}
          <br />
          <br />
          <br />
          <br />
        </div>
        <div id="cart_right">
          <Item>
            <div>{cart.length === 0 && <div>Cart is Empty</div>}</div>
            {cart.map((item) => (
              <div key={item.id} className="product2">
                <div className="set1">
                  <img className="pic1" src={item.img} alt={item.id} />
                  <div className="set2">
                    <span>{item.disp}</span>
                    <div className="set4">
                      <div className="set5">
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={() => onAdd(item)}
                          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/2x/external-plus-science-education-dreamstale-lineal-dreamstale.png"
                        />
                        <div className="set6">
                          {item.qty === 0 ? null : item.qty}
                        </div>
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={() => onRemove(item)}
                          className="pic2"
                          src="https://img.icons8.com/fluency-systems-regular/2x/minus-math.png"
                        />
                      </div>
                      <p className="total">
                        {item.qty} x {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Item>
          <div id="lower_right">
            <input
              id="gift_card_bx"
              type="text"
              placeholder="Gift card or discount code"
            />
            <button id="apply">Apply</button>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <p>
              <span style={{ marginRight: "230px", marginLeft: "-15px" }}>
                Subtotal
              </span>
              <span id="tot1">₹{itemsPrice}</span>
            </p>
            {/* <p>
              Shipping &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            </p> */}
            <hr />
            <p>
              <span style={{ marginRight: "200px", marginLeft: "-10px" }}>
                Total
              </span>
              <span id="tot2" style={{ marginLeft: "50px" }}>
                ₹{itemsPrice}
              </span>
            </p>
            {/* <p>Your total saving &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Rs. 0.00  </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imformation;
