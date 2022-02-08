import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await Axios.get(url);
      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <article className='card d-flex align-items-center p-5 shadow mt-5'>
      <img
        src={user.avatar_url}
        style={{ width: "80px", height: "80px" }}
        alt={user.login}
        className='rounded-circle my-4'
      ></img>
      <h2>{user.login}</h2>
    </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h4>Is Loading...</h4>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h4>Error...</h4>
    </div>
  );
};

export default ConditionalCompining;
