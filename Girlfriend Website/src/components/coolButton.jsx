import { Link } from "react-router-dom";

export default function CoolButton({ image, title }) {
  return (
    <div id="button">
      <a href={Link}>
        <img id="buttonImage" src={image} alt={title} />
        <h1 id="buttonTitle"> {title} </h1>
      </a>
    </div>
  );
}