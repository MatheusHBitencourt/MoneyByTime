import "./App.css";
import { useState } from "react";

function App() {
  const [salary, setSalary] = useState(0);
  const [hoursPeerWeek, setHoursPeerWeek] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [result, setResult] = useState(null);

  function calculate(event) {
    event.preventDefault();
    const hourPriceCalculation = salary / (hoursPeerWeek * 4);
    const resultCalculation = productPrice / hourPriceCalculation;
    setResult(resultCalculation);
  }

  return (
    <>
    <header>
      Money By Hour Calculator
    </header>
      <main>
        <form onSubmit={calculate}>
          <label>Salary</label>
          <input
            value={salary}
            onChange={(event) => {
              setSalary(event.target.value);
            }}
            type="number"
          />

          <label> Worked hours by week</label>
          <input
            value={hoursPeerWeek}
            onChange={(event) => {
              setHoursPeerWeek(event.target.value);
            }}
            type="number"
          />

          <label>Desired product price</label>
          <input
            onChange={(event) => {
              setProductPrice(event.target.value);
            }}
            type="number"
          />

          <button type="submit">Calculate</button>
        </form>

        <div>
          {result && <h2>You need work {result} hours to get this product </h2>}
        </div>
      </main>
    </>
  );
}

export default App;
