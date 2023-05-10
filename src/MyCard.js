import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyCard.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMobile, faStar } from "@fortawesome/free-solid-svg-icons";
import ProductRating from "./product-card/product-rating";
function MyCard() {
  return (
    <div className="sop">
      <div className="ayshu">
        <img src="https://m.media-amazon.com/images/I/61zTvdVUSqL._UY606_.jpg"></img>

        <h4>U.S.polo Assn.</h4>
        <p>Men Regular Shorts</p>
        <span className="car">Rs. 1039</span>
        <span className="top">Rs.899</span>
        <span className="title">(70% oFF)</span>
      </div>
      <div className="timtim">
        <button className="bat">
          <FontAwesomeIcon icon={faHeart} />
          <p>WISHLIST</p>
        </button>
        <p>sizes:S</p>
      </div>
      <div className="name">
        <ProductRating></ProductRating>
      </div>
      <div className="frist">
        <div className="ball">
          <FontAwesomeIcon className="mobile-icon" icon={faMobile} />
          <h5>VIEW SIMILAR</h5>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
