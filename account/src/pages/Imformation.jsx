import React from 'react'
import "./Imformation.css";

const Imformation = () => {

  return (
 <div className='shipping'>
    <div id="top_nav">

<img id="image_logo" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?181096" width="13%"  height="10%" alt=""/>

<div id="information">
<div className='d1'>Shop PAY</div>
<div className='d2'>PayPal</div>
<div className='d3'>G Pay</div>
</div>
  </div>
  <div id="lower_det">
        <div id="cart_left">
            <p>Contact information</p><br/>
            <input id="width" class="eMail"type="text" placeholder="Email"/> <br/><br/>
            <input type="checkbox"/> <div id="topmsg"><p>Keep me up to date on news and exclusive offers through all channels of communication, including WhatsApp. For more details click here</p></div> <br/><br/>
            <p>Shipping address</p>
           <select id="width"   name="Country/India">
               <option value="">India</option>
           </select><br/><br/>
           <input id="name_info" type="text" placeholder="First name"/>
           <input class="last" id="name_info" type="text" placeholder="Last name"/><br/><br/>
           <input id="width" class="userAdd" type="text" placeholder="Address"/><br/><br/>
           <input id="width" type="text" placeholder="Appartment"/><br/><br/>
           <input id="city_add" type="text" placeholder="City"/>
           <input id="city_add"type="text" placeholder="State"/>
           <input id="city_add"type="text" placeholder="Pin code"/><br/><br/>
           <div id="phone_info">In case we need to contact you about your order
        </div>
        <input id="widt" type="number" class="phno"placeholder="Phone"/><i id="question" class="fas fa-question-circle"></i><br/><br/>
           <input type="checkbox"/>	Save this information for next time <br/><br/>
           <button id="button_shipping">Continue to shipping</button><br/><br/><br/>
           <hr/><br/><br/>
  
    <div id="extra_item">
            Refund &nbsp; &nbsp; Shipping policy &nbsp; &nbsp; Privacy policy &nbsp; &nbsp; Terms of service
           </div>
           <br/><br/><br/><br/>
      </div>
      <div id="cart_right">
            <div id="upper_right">
              
            
            </div>
            <div id="lower_right">
             
                <input id="gift_card_bx" type="text" placeholder="Gift card or discount code"/>
                <button id="apply">Apply</button>
            <br/><br/><br/>
                <hr/><br/>
                <p>Subtotal &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ₹<span id="tot1">0.00</span></p>
                <p>Shipping  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Calculate At next step</p>
                <hr/>
                <p>Total &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;     INR ₹<span2 id="tot2">0.00</span2></p>
                <p>Your total saving &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Rs.0.00  </p>
            </div>
        </div>

   </div>

 </div>

  )
}

export default Imformation