import axios from "axios";

const BASE_URL = "https://react-http-60f09-default-rtdb.firebaseio.com/todo";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}.json`);
    const fetchedTodos = [];
    for (const key in response.data) {
      fetchedTodos.push({ id: key, ...response.data[key] });
    }
    return fetchedTodos;
  } catch (error) {
    console.error("Error fetching todos from Firebase:", error);
    throw error;
  }
};

export const addTask = async (newTodo) => {
  try {
    const response = await axios.post(`${BASE_URL}.json`, newTodo);
    if (response.status === 200) {
      return response.data.name;
    }
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const updateTodoCompleteStatus = async (id, complete) => {
  try {
    await axios.patch(`${BASE_URL}/${id}.json`, { complete });
  } catch (error) {
    console.error("Error updating complete status:", error);
    throw error;
  }
};

export const updateTodoName = async (id, name) => {
  try {
    await axios.patch(`${BASE_URL}/${id}.json`, { name });
  } catch (error) {
    console.error("Error updating todo name:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}.json`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
