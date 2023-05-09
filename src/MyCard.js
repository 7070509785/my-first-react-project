import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyCard.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
function MyCard() {
  return (
    <div className="sop">
      <div className="ayshu">
        <img src="https://m.media-amazon.com/images/I/61zTvdVUSqL._UY606_.jpg"></img>
        <div className="timtim">
          <div className="bat">
            <FontAwesomeIcon icon={faHeart} />
            <p>WISHLIST</p>
          </div>
          <p>sizes:S</p>
        </div>
        <h4>U.S.polo Assn.</h4>
        <p>Men Regular Shorts</p>
        <span className="car">Rs. 1039</span>
        <span className="top">Rs.899</span>
        <span className="title">(70% oFF)</span>
      </div>
      <div className="nutan">
        <span>4.2</span>
        <img src="https://img.freepik.com/free-vector/illustration-favorite-star_53876-6163.jpg?w=740&t=st=1683369139~exp=1683369739~hmac=100963326e956a92e717b56e39695b2d12c37e3e7473c370f665fba316afda62"></img>
        <span>25.7k</span>
      </div>
      <div className="frist">
        <div className="ball">
          <FontAwesomeIcon icon={faMobile} />
          <h5>VIEW SIMILAR</h5>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
