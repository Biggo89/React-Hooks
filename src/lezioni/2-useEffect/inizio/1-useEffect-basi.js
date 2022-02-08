import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

const useEffectBasi = () => {
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => {
      return oldValue + 1;
    });
  };

  useEffect(() => {
    console.log("useEffect che richiamo sempre!");

    return () => console.log("funzione di cleanup");
  });

  useEffect(() => {
    console.log("use effect scatenato");
    document.title = `Hai ${value} nuovi messaggi`;
  }, [value]);
  return (
    <div className='item shadow'>
      <h4>Value: {value}</h4>
      <button className='btn btn-info' onClick={() => aumenta()}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
