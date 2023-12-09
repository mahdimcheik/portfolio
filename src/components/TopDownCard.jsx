import "./TopDownCard.css";
export default function TopDownCard({ title, description, imgUrl }) {
  console.log(description);
  return (
    <div className="TopDownCard">
      <div className="card">
        <div
          className="face face1"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        >
          <div className="content">
            <h3>{""}</h3>
          </div>
        </div>
        <div className="face face2">
          <h4>{title}</h4>
          <ul className="content">
            {description.map((ele, index) => (
              <li key={index} className="liste-skills">
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
