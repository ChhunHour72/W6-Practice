import Place from "./components/Place.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  let entryArray = AVAILABLE_PLACES.map(entry =>{
    return (
      <Place 
        image={entry.image}
        title={entry.title}
        id={entry.id}
      />
    )
  })
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
          {entryArray}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
