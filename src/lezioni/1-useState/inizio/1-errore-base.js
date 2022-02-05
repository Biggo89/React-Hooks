import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
  let titolo = "hello world";

  const cambiaTitolo = (nuovoTitolo) => {
    titolo = nuovoTitolo;
    console.log(titolo);
  };

  return (
    <>
      <h2>{titolo}</h2>
      <button
        className='btn btn-info my-3'
        onClick={cambiaTitolo("Hello Closhard")}
      >
        Change Title
      </button>
    </>
  );
};

export default ErroreBase;

//Soluzione - note:
//In questo caso il valore di titolo è cambiato. Ma il componente non è stato ridisegnato.
//Per ovviare a ciò, il componente dovrebbe avere uno stato.
