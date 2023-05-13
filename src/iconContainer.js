import "./iconContainer.css";
function IconContainer() {
  return (
    <div className="himanshu">
      <div className="nutan">
        <h2>What customers say about this product</h2>
        <span>X</span>
      </div>
      <div className="nutan-mandal">
        <div className="kajal">
          <p>Fit</p>
          <div className="bittu">
            <progress id="file" value="4" max="100"></progress>
            <p>Tight(4%)</p>
          </div>
          <div className="bittu1">
            <progress id="file" value="4" max="100"></progress>
            <p>Tight(4%)</p>
          </div>
          <div className="bittu2">
            <progress id="file" value="4" max="100"></progress>
            <p>ALittle Tight(4%)</p>
          </div>
          <div className="bittu3">
            <progress id="file" value="70" max="100"></progress>
            <p>Just Right(73%)</p>
          </div>
          <div className="bittu4">
            <progress id="file" value="12" max="100"></progress>
            <p>ALittle Loose(12%)</p>
          </div>
          <div className="bittu5">
            <progress id="file" value="7" max="100"></progress>
            <p>Loose(7%)</p>
          </div>
        </div>
        <div timtim>
          <p>Lenght</p>
          <div className="bittu">
            <progress id="file" value="4" max="100"></progress>
            <p>Tight(4%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconContainer;
