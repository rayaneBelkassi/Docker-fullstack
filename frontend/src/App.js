import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>🐾 Refuge pour Animaux</h1>
      <div className="animal-list">
        {animals.map((animal) => (
          <div className="animal-card" key={animal.id}>
            <img
              src={`https://placedog.net/300/200?id=${animal.id}`}
              alt={animal.name}
            />
            <h3>{animal.name}</h3>
            <p>
              <strong>Espèce :</strong> {animal.species}
            </p>
            <p>
              <strong>Âge :</strong> {animal.age} an(s)
            </p>
            <p>Status : {animal.adopted ? "🐾 Adopté" : "🔎 À adopter"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
