import { useState } from "react";
import { Buttons } from "./Buttons"



function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Cambiar la clase del body según el estado del tema
  document.body.className = isDarkMode ? 'dark-mode' : '';
  return (

    <>
    <nav>
      <ul class="nav justify-content-center bg-dark">
        <li class="nav-item">
          <a class="nav-link active fs-2" aria-current="page" href="#">Calculadora</a>
        </li>
      </ul>
    </nav>

    <div className="container text-center mt-2 ">

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
      <label class="btn btn-outline-primary" for="btnradio1">Light</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
      <label class="btn btn-outline-primary" for="btnradio2">Dark</label>
      </div>

    </div>

    <Buttons/>

    </>
  )
}

export default App
