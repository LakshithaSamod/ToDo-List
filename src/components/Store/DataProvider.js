import React, { useState, useEffect, createContext } from "react";
import { fetchTodos } from "../TaskAPIs/TaskAPI";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTodos()
      .then((fetchedTodos) => {
        setTodos(fetchedTodos);
        console.log("fetchedTodos");
        console.log(fetchedTodos);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={[todos, setTodos, isLoading]}>
      {props.children}
    </DataContext.Provider>
  );
};
