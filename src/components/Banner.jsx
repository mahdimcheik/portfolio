import "./Banner.css";
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-description">
        <h1>Mahdi Mcheik</h1>
        <h3>Développeur web</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          temporibus a necessitatibus illo porro rem ex dicta nobis, quis beatae
          debitis officiis delectus enim eum nemo repellendus optio esse
          maiores!
        </p>
      </div>
      <div
        className="banner-image"
        style={{
          backgroundImage: `url("media/mahdi.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          aspectRatio: "3 / 4",
        }}
      ></div>
    </div>
  );
}
