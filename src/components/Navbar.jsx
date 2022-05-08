import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar= ()=>{
    return (
        <div className="navbar">
            
            <div className="top-div">
            <div className="not-use"></div>
                <div className="web-name"><Link className="img-logo" to="/"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?height=40&pad_color=fff&v=1574278243" alt="logo" /></Link></div>
                <div className="other-info">
                    <Link className="search" to="/search"><img src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1651655391~hmac=bfbbc33c4b6e929d0af983eb9491932b" alt="" /></Link>
                    <Link className="login" to="/login"><img src="https://cdn-icons.flaticon.com/png/512/4597/premium/4597031.png?token=exp=1651654928~hmac=b56746ef2ceb9238918a73dad87a82aa" alt="" /></Link>
                    <Link className="cart" to="/cart"><img src="https://cdn-icons.flaticon.com/png/512/2567/premium/2567829.png?token=exp=1651655125~hmac=84268317407a24cf206a736498f5feae" alt="" /></Link>
                </div>
            </div>
            <div className="bottom-div">
                <Link className="nav" to="/shoes">SHOES</Link>
                <Link className="nav" to="/handbag">HANDBAGS & ACCESSORIES</Link>
                <Link className="nav" to="/designers">DESIGNERS</Link>
                <Link className="nav" to="/women">WOMEN</Link>
                <Link className="nav" to="/men">MEN</Link>
                <Link className="nav" to="/sunglasses">SUNGLASSES</Link>
                <Link className="nav" to="/jewelry">JEWELRY & WATCHES</Link>
                <Link className="nav" to="/signin">LOGIN</Link>
                <Link className="nav" to="/cart">🛒CART</Link>
                {/* <Link className="clear" to="/clearance">CLEARANCE</Link> */}
            </div>
        </div>
    )
}