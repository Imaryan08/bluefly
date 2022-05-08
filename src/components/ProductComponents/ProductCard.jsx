import "./product.css";
import { Link } from "react-router-dom";


const ProductCard = ({
  id,
  img1,
  img3,
  title,
  owner,
  price,
  discounted_price,
  saveupto,
}) => {
  // console.log("uii");
  // const products = useSelector((store) => store.products.products);
  return (
    <div className="card">
      <Link
        to={{
          pathname: `/product/${id}`,
        }}
      >
        <div key={id}>
          <div className="x">
            <a href="#" className="hover-switch">
              <img src={img1} />
              {/* <img src={e.img3} /> */}
            </a>
            <img  src={img3} alt="" />
          </div>
          <div className="text">
            <p className="owner">{owner}</p>
            <h3 className="tit">{title}</h3>
            <div className="flex">
              <p className="price">${price}</p>
              <p className="dis_price">${discounted_price}</p>
              <p className="save">Save {saveupto}%</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
