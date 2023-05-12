import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyCard.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMobile, faStar } from "@fortawesome/free-solid-svg-icons";
import ProductRating from "./product-card/product-rating";
function MyCard() {
  return (
    <div className="sop">
      <div className="ayshu">
        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg"></img>
        <h3>U.S.polo Assn.</h3>
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
        <div className="nutan2">
          <p>sizes:S</p>
        </div>
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
