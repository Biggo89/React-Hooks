import React from "react";
import { useState } from "react/cjs/react.development";
import { data } from "../../../data";

const ArrayState = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  const removeItem = (peopleId) => {
    let newPeople = people.filter((el) => el.id !== peopleId);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map(({ id, name }, index) => {
        return (
          <div key={id} className='item shadow'>
            <h5>{name}</h5>
            <button
              type='button'
              className='button delete-button'
              onClick={() => removeItem(id)}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
