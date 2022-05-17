import "./App.css";
import React, {useState} from "react";

const App = () => {
  const [salary, setSalary] = useState("");
  const [hoursPeerWeek, setHoursPeerWeek] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [result, setResult] = useState("");

  const salaryMask = (event) => {
    const value = event.target.value;
    const friendlyValue = value
      .replace(/\D/g, "")
      .replace(/(^[0])(\d{2})+?$/, "R$ $1,$2")
    setSalary(friendlyValue);
    console.log(salary);
  };

  const calculate = (event) => {
    event.preventDefault();
    const hourPriceCalculation = salary / (hoursPeerWeek * 4);
    const resultCalculation = productPrice / hourPriceCalculation;
    setResult(resultCalculation);
  };

  return (
    <>
      <header>Buy by hour</header>
      <main>
        <form onSubmit={calculate}>
          <label>Salary:</label>
          <input
            onChange={salaryMask}
            type="text"
            value={salary}
            placeholder="Enter your salary"
            required
          />

          <label> Worked hours by week :</label>
          <input
            onChange={(event) => {
              setHoursPeerWeek(event.target.value);
            }}
            type="number"
            placeholder="Enter your worked hours"
          />

          <label>Desired product price:</label>
          <input
            onChange={(event) => {
              setProductPrice(event.target.value);
            }}
            type="number"
            placeholder="Enter your desired product price"
          />

          <button type="submit">Calculate</button>
        </form>

        <div>
          {result && <h2>You need work {result} hours to get this product </h2>}
        </div>
      </main>
    </>
  );
};

export default App;
