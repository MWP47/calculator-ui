import axios from 'axios';
import React, { useState } from 'react';

const Calc = () => {
  const [input, changeInput] = useState({ no1: '', no2: '' });
  const [result, setResult] = useState("");

  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value });
  };

  // Accepts an operation parameter
  const readvalues = (operation) => {
    console.log(input);

    axios.post(`http://localhost:4000/${operation}`, input)
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        console.log("Error", error);
        setResult("error");
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">Calculator</h1>
      <div className="row g-3">
        <div className="col col-12 col-sm-6">
          <label className="form-label">Input Number A:</label>
          <input type="text" className="form-control" name="no1" value={input.no1} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-6">
          <label className="form-label">Input Number B:</label>
          <input type="text" className="form-control" name="no2" value={input.no2} onChange={inputHandler} />
        </div>
        <div className="col-6 col-sm-3">
          <button className="btn btn-success w-100" onClick={() => readvalues("add")}>ADD</button>
        </div>
        <div className="col-6 col-sm-3">
          <button className="btn btn-danger w-100" onClick={() => readvalues("sub")}>SUBTRACT</button>
        </div>
        <div className="col-6 col-sm-3">
          <button className="btn btn-primary w-100" onClick={() => readvalues("multi")}>MULTIPLY</button>
        </div>
        <div className="col-6 col-sm-3">
          <button className="btn btn-warning w-100" onClick={() => readvalues("div")}>DIVIDE</button>
        </div>
        <div className="col-12 mt-4">
          <h4 className="text-center">Result: {result !== "" ? result : "N/A"}</h4>
        </div>
      </div>
    </div>
  );
};

export default Calc;
