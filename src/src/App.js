import React from "react";
import Exo1 from "./components/Exo1";
import Calculator from "./components/Calculator";

const App = () => {

  return (
    <div className="App">
      {/* Uncomment lines below to show 1st Exercice results */}
      {/* <div>
        <h2>Exercice on props & state</h2>
        <Exo1 />
      </div> */}

      <div>
        <h2>Calculator</h2>
        <Calculator />
      </div>

    </div>
  );
}

export default App;
