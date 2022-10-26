import React from "react";
import Messages from "./components/Messages";
import Student from "./components/Student";
import Fruit from "./components/Fruit";
import Clock from "./components/Clock";

const App = () => {
  const MESSAGES = [
    { message: "React JS" },
    { message: "React Native" },
    { message: "Angular" },
    { message: "Symfony" },
    { message: "MongoDB" },
  ];

  const students = [
    { notes: [12, 11, 10], name: "Alan" },
    { notes: [18, 10, 19], name: "Alice" },
    { notes: [10, 9, 11], name: "Bernard" },
    { notes: [11, 17, 19], name: "Sophie" },
  ];

  const products = [
    { prices: [1.2, 1.1, 1.0], name: "apple" },
    { prices: [1.8, 1.0, 1.9], name: "oragne" },
    { prices: [1.0, 0.9, 1.1], name: "bananas" },
  ];

  const avg = (notes) => {
    if (notes.length > 0) {
      let sum = 0;
      for (const note of notes) sum += note;

      return Math.floor((sum / notes.length) * 10) / 10;
    }

    return null;
  }

  return (
    <div className="App">
      <div className="App-header">
          <h2>Display messages</h2>
        <Messages messages={MESSAGES} />
      </div>

      <div>
        <h2>Display students</h2>
        {students.map((student, key) => <Student key={key} name={student.name} notes={student.notes} avg={avg} />)}
      </div>

      <div>
        <h2>Display fruits</h2>
        {products.map((product, key) => <Fruit key={key} name={product.name} prices={product.prices} avg={avg} />)}
      </div>

      <div>
        <h2>Display clock</h2>
        <Clock />
      </div>

    </div>
  );
}

export default App;
