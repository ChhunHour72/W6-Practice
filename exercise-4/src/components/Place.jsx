export default function Place(prop) {
  return (
    <li key={prop.id} className="place-item">
      <button>
        <img src={prop.image.src} alt={prop.image.alt} />
        <h3>{prop.title}</h3>
      </button>
    </li>
  );
}
