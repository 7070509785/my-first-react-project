import "./carousel-card.css";
function CarouselCard({ number, imageSrc, title }) {
  return (
    <div className="apple1">
      <div className="apple">
        <p>{number}</p>
        <img src={imageSrc}></img>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default CarouselCard;
