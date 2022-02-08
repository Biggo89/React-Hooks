import React, { useState } from "react";

const StateObject = () => {
  const [persona, setPersona] = useState({
    name: "Loris",
    age: 30,
    saluto: "Saluto romano meme",
  });

  const cambiaValori = () => {
    setPersona({
      ...persona,
      age: persona.age + 1,
    });
  };

  return (
    <div className='item shadow'>
      <div className='text-left'>
        <h5>{persona.name}</h5>
        <h5>{persona.age}</h5>
        <h5>{persona.saluto}</h5>
      </div>
      <div>
        <button
          type='button'
          className='btn btn-info'
          onClick={() => cambiaValori()}
        >
          Cambia Valori
        </button>
      </div>
    </div>
  );
};

export default StateObject;
