import React, { useState } from "react";

export default function Calc() {
  const [exp, setExp] = useState("");

  const clear = () => {
    setExp("");
  };

  const result = () => {
    try {
      let v = exp;
      setExp(eval(v));
    } catch (error) {
      setExp("expression non valide");
    }
  };
  const tapecar = (e) => {
    let oldval = exp;
    let newval = oldval + e.target.value;
    setExp(newval);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          <input
            id="input"
            className="btn btn-secondary bg-secondary text-dark"
            value={exp}
            type="text"
            placeholder="0"
          />
          <input
            id="C"
            className="btn m-2 px-3 py-2 toto"
            onClick={clear}
            type="button"
            value="C"
          />
        </div>
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="1"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="2"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="3"
        />
        <input
          className="btn btn-secondary m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="+"
        />
        <br />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="4"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="5"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="6"
        />
        <input
          className="btn btn-secondary m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="-"
        />
        <br />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="7"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="8"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="9"
        />
        <input
          className="btn btn-secondary m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="*"
        />
        <br />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="."
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="0"
        />
        <input
          className="btn btn-dark m-2 px-3 py-2 toto"
          onClick={result}
          type="button"
          value="="
        />

        <input
          className="btn btn-secondary m-2 px-3 py-2 toto"
          onClick={(e) => tapecar(e)}
          type="button"
          value="/"
        />
      </div>
      <br />
    </div>
  );
}
