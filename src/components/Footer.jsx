export const Footers = () => {
  return (
    <div className="foot">
      <section>
        <div className="footParent">
          <div className="products">
            <a href="#" className="ImgParent">
              <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_540x.jpg?v=1615204984" />
            </a>
            <h3 className="prodName">Up to 85% Off the denim shop for him & her</h3>
            <p className="prodCat">
              From Hudson Jeans, Joe's Jeans, J Brand & More
            </p>
            <a href="">
              <button>SHOP DENIM</button>
            </a>
          </div>

          <div className="products">
            <a href="#" className="ImgParent">
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/lightweight_jackets_540x.jpg?v=1630509164"
                alt=""
              />
            </a>
            <h3 className="prodName">Up to 80% off lightweight jackets & coats</h3>
            <p className="prodCat">Must-Haves From Cole Haan, Burberry, & More</p>
            <a href="">
              <button>SHOP OUTWEAR</button>
            </a>
          </div>

          <div className="products">
            <a href="" className="ImgParent">
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/accesories_540x.jpg?v=1630509636"
                alt=""
              />
            </a>
            <h3 className="prodName">
              UP TO 90% off Women's Must-have accessories
            </h3>
            <p className="prodCat">Shop Wallets, Belts, Hats, Sunglasses & More</p>
            <a href="">
              <button>SHOP WOMEN'S ACCESSORIES</button>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footSection">
          <div className="section1">
            <h3>
              ABOUT US
              <span>
                <i
                  onClick={() =>{document.querySelector(".aboutUs").style.display = "block";
                  document.querySelector("#downArrow").style.display = "none";
                  document.querySelector("#upArrow").style.display = "inline-block";}}
                  id="downArrow"
                  className="fa fa-caret-down fa-1x"
                ></i>
                <i
                 onClick={() =>{document.querySelector(".aboutUs").style.display = "none";
                 document.querySelector("#downArrow").style.display = "inline-block";
                 document.querySelector("#upArrow").style.display = "none";}}
                  id="upArrow"
                  className="fa fa-caret-up fa-1x"
                ></i>
              </span>
            </h3>
            <span className="aboutUs">
              <p>
                <a href="#">Shipping & Returns</a>
              </p>
              <p>
                <a href="#">Pre-Owned Guide</a>
              </p>
              <p>
                <a href="#">Contact Us</a>
              </p>
              <p>
                <a href="#">Sell on Bluefly</a>
              </p>
              <p>
                <a href="#">Frequently Asked Questions</a>
              </p>
              <p>
                <a href="#">Privacy policy</a>
              </p>
              <p>
                <a href="#">Terms & Conditions</a>
              </p>
            </span>
          </div>

          <div className="section2">
            <h3>
              POLICY
              <span>
                <i
                  onClick={() =>{ document.querySelector(".policy").style.display = "block";
                  document.querySelector("#downArrow1").style.display = "none";
                  document.querySelector("#upArrow1").style.display = "inline-block";}}
                  id="downArrow1"
                  className="fa fa-caret-down fa-1x"
                ></i>
                <i
                  onClick={() =>{ document.querySelector(".policy").style.display = "none";
                  document.querySelector("#downArrow1").style.display = "inline-block";
                  document.querySelector("#upArrow1").style.display = "none";}}
                  id="upArrow1"
                  className="fa fa-caret-up fa-1x"
                ></i>
              </span>
            </h3>
            <span className="policy">
              <p>
                <a href="#">Return Policy</a>
              </p>
              <p>
                <a href="#">Terms Of use</a>
              </p>
              <p>
                <a href="#">Cancellation & Returns</a>
              </p>
              <p>
                <a href="#">EPR Compilance</a>
              </p>
              <p>
                <a href="#">Security</a>
              </p>
              <p>
                <a href="#">Terms & Conditions</a>
              </p>
            </span>
          </div>

          <div className="section4">
            <h3>
              SOCIAL
              <span>
                <i
                   onClick={() =>{ document.querySelector(".socialHandle").style.display = "block";
                   document.querySelector("#downArrow2").style.display = "none";
                   document.querySelector("#upArrow2").style.display = "inline-block";}}
                  id="downArrow2"
                  className="fa fa-caret-down fa-1x"
                ></i>
                <i
                 onClick={() => {document.querySelector(".socialHandle").style.display = "none";
                 document.querySelector("#downArrow2").style.display = "inline-block";
                 document.querySelector("#upArrow2").style.display = "none";}}
                  id="upArrow2"
                  className="fa fa-caret-up fa-1x"
                ></i>
              </span>
            </h3>
            <span className="socialHandle">
              <p>
                <a href="#">Facebook</a>
              </p>
              <p>
                <a href="#">Twitter</a>
              </p>
              <p>
                <a href="#">YouTube</a>
              </p>
              <p>
                <a href="#">Linkedin</a>
              </p>
              <p>
                <a href="#">Instagram</a>
              </p>
            </span>
          </div>

          <div className="section3">
            <h3>SIGN & SAVE</h3>
            <p>Subscribe to get exclusive offers on designer brand</p>
            <input type="text" placeholder="Enter your email" id="" />
            <button href="#">Subscribe</button>
          </div>
        </div>

        <div className="copyright">
          <div className="footerLogo" onClick={() => {window.location.href="/index.html"}}>
            
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820"
              alt=""
            />
          </div>
          <p>
            © 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};
