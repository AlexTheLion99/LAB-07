import React, { useState } from 'react';
import './RandomComponent.css'; // Asegúrate de crear este archivo para los estilos.

function RandomComponent() {
  const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * 100) + 1);

  const resetRandomValue = () => {
    setRandomValue(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="random-page">
      <header className="random-header">
        <h1>Random Page</h1>
        <p>Explore randomness and interaction on this page.</p>
      </header>

      <main className="random-content">
        <section className="random-section">
          <h2>Random Number Generator</h2>
          <p>Current Random Value: {randomValue}</p>
          <button onClick={resetRandomValue}>Generate New Random Value</button>
        </section>

        <section className="random-image">
          <h2>Random Image</h2>
          <img src={`https://picsum.photos/200/300?random=${randomValue}`} alt="Random" />
          <p>This image changes with the random value.</p>
        </section>
      </main>

      <footer className="random-footer">
        <p>&copy; 2024 Random Page. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default RandomComponent;
