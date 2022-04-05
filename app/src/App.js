import "./App.css";
import {useState} from "react";

function App() {
  const [salary, setSalary] = useState("");
  const [hoursPeerWeek, setHoursPeerWeek] = useState("");
  const [hourPrice, setHourPrice] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [result, setResult] = useState("");

  function getValues(valueObject) {
    const valueIdentification = {
      salary: setSalary(valueObject.salary),
      hoursPeerWeek: setHoursPeerWeek(valueObject.hoursPeerWeek),
      hourPrice: setHourPrice(valueObject.hourPrice),
      productPrice: setProductPrice(valueObject.productPrice),
    };

    valueIdentification[valueObject.name]();
  }

  function calculate(event) {
    event.preventDefault();
  }

  return (
    <>
      <div>
        <form>
          <label>Salary</label>
          <input
            value={salary}
            onChange={(event) => {
              getValues({name: "salary", salary: event.target.value});
            }}
            type="text"
          />
          <label> Worked hours by week</label>
          <input
            value={hoursPeerWeek}
            onChange={(event) => {
              getValues({
                name: "hoursPeerWeek",
                hoursPeerWeek: event.target.value,
              });
            }}
            type="text"
          />
          <label>Desired product price</label>
          <input
            value={productPrice}
            onChange={(event) => {
              getValues({
                name: "procuctPrice",
                productPrice: event.target.value,
              });
            }}
            type="text"
          />
          <button onSubmit={calculate}>Calculate</button>
        </form>
      </div>
    </>
  );
}

export default App;
