import { useEffect, useState } from "react";
import { Buttons } from "./Buttons";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Aplicar la clase al body según el estado del tema
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
    <>
      <nav>
        <ul className={`nav justify-content-center ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          <li className="nav-item">
            <a className={`nav-link active fs-2 ${isDarkMode ? 'text-white' : 'text-dark'}`} aria-current="page" href="#">
              Calculadora
            </a>
          </li>
        </ul>
      </nav>

      <div className="container text-center mt-2">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked={!isDarkMode}
            onChange={handleThemeToggle}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Light
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked={isDarkMode}
            onChange={handleThemeToggle}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Dark
          </label>
        </div>
      </div>

      <Buttons  />
    </>
  );
}

export default App;
