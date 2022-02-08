import React from "react";
import { useState } from "react/cjs/react.development";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const diminuisci = (valore) => {
    setContatore(valore);
  };

  //due possibilità
  // const aumenta = (valore) => {
  //   setContatore(valore);
  // };
  // onClick={() => aumenta(contatore + 1)}
  const aumenta = () => {
    setContatore((oldValue) => {
      const { log } = console;
      log("oldValue: " + oldValue);
      return oldValue + 1;
    });
  };

  return (
    <div className='item shadow'>
      <div className=''>
        <h3>{contatore}</h3>
      </div>
      <div className=''>
        <button
          type='button'
          className='btn btn-success'
          onClick={() => aumenta()}
        >
          Aumenta
        </button>
      </div>
      <div className=''>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => diminuisci(contatore - 1)}
        >
          Diminuisci
        </button>
      </div>
      <div className=''>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={() => setContatore(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
