export default function CoolButton({ image, title }) {
  return (
    <div id="button">
      <a href="#">
        <img id="buttonImage" src={image} alt={title} />
      <h1 id="buttonTitle"> {title} </h1>
    </a>
    </div>
  );
}