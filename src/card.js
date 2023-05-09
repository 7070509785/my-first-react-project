import "./card.css";
function Card({ imageSrc, image1Src, thela, title, price }) {
  return (
    <div>
      <div className="timtim">
        <div className="ayush">
          <img src={imageSrc}></img>
        </div>
        <div className="bittu">
          <img src={image1Src}></img>
        </div>
        <div className="himanshu1">
          <img src={thela}></img>
        </div>
        <div className="hello">
          <p>{title}</p>
        </div>
        <div className="hii">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
