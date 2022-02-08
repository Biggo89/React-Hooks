import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setUsers(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Fetch Component</h1>

      <ul className='users'>
        {users.map((el, index) => {
          console.log(el);
          console.log(el.login);
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={index} className='shadow'>
              <img src={img} alt={login}></img>
              <div>
                <h6>{login}</h6>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchComponent;
