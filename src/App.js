import React, { useState } from "react";
// import data from "./data/data";
import { getIpsumText } from "./data/getIpsumText";

function App() {
  const [text, setText] = useState(null);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }

    getIpsumText(amount).then((data) => {
      setText(data);
    });
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min={1}
          max={100}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text &&
          text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </article>
    </section>
  );
}

export default App;
