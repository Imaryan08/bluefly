const Footers = () => {
  return `
        <section>
      <div class="footParent">
        <div class="products">
          <a href="#" class="ImgParent">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_540x.jpg?v=1615204984"
            />
          </a>
          <h3 class="prodName">Up to 85% Off the denim shop for him & her</h3>
          <p class="prodCat">From Hudson Jeans, Joe's Jeans, J Brand & More</p>
          <a href="">
            <button>SHOP DENIM</button>
          </a>
        </div>

        <div class="products">
          <a href="#" class="ImgParent">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/lightweight_jackets_540x.jpg?v=1630509164"
              alt=""
            />
          </a>
          <h3 class="prodName">Up to 80% off lightweight jackets & coats</h3>
          <p class="prodCat">Must-Haves From Cole Haan, Burberry, & More</p>
          <a href="">
            <button>SHOP OUTWEAR</button>
          </a>
        </div>

        <div class="products">
          <a href="" class="ImgParent">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/accesories_540x.jpg?v=1630509636"
              alt=""
            />
          </a>
          <h3 class="prodName">UP TO 90% off Women's Must-have accessories</h3>
          <p class="prodCat">Shop Wallets, Belts, Hats, Sunglasses & More</p>
          <a href="">
            <button>SHOP WOMEN'S ACCESSORIES</button>
          </a>
        </div>
      </div>
    </section>

    <footer>
      <div class="footSection">
        <div class="section1">
          <h3>
            ABOUT US
            <span>
              <i onclick="downArrow()" id="downArrow" class="fa fa-caret-down fa-1x"></i>
              <i onclick="upArrow()" id="upArrow" class="fa fa-caret-up fa-1x"></i>
            </span>
          </h3>
          <span class="aboutUs">
            <p><a href="#">Shipping & Returns</a></p>
            <p><a href="#">Pre-Owned Guide</a></p>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Sell on Bluefly</a></p>
            <p><a href="#">Frequently Asked Questions</a></p>
            <p><a href="#">Privacy policy</a></p>
            <p><a href="#">Terms & Conditions</a></p>
          </span>
        </div>

        <div class="section2">
          <h3>
            POLICY
            <span>
              <i onclick="downArrow1()" id="downArrow1" class="fa fa-caret-down fa-1x"></i>
              <i onclick="upArrow1()" id="upArrow1" class="fa fa-caret-up fa-1x"></i>
            </span>
          </h3>
          <span class="policy">
            <p><a href="#">Return Policy</a></p>
            <p><a href="#">Terms Of use</a></p>
            <p><a href="#">Cancellation & Returns</a></p>
            <p><a href="#">EPR Compilance</a></p>
            <p><a href="#">Security</a></p>
            <p><a href="#">Terms & Conditions</a></p>
          </span>
        </div>

        <div class="section4">
          <h3>
            SOCIAL
            <span>
              <i onclick="downArrow2()" id="downArrow2" class="fa fa-caret-down fa-1x"></i>
              <i onclick="upArrow2()" id="upArrow2" class="fa fa-caret-up fa-1x"></i>
            </span>
          </h3>
          <span class="socialHandle">
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">YouTube</a></p>
            <p><a href="#">Linkedin</a></p>
            <p><a href="#">Instagram</a></p>
          </span>
        </div>

        <div class="section3">
          <h3>SIGN & SAVE</h3>
          <p>Subscribe to get exclusive offers on designer brand</p>
          <input type="text" placeholder="Enter your email" id="" />
          <button href="#">Subscribe</button>
        </div>
      </div>

      <div class="copyright">
        <div class="footerLogo" onclick="footerLogo()">
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
    `;
}

export default Footers;
