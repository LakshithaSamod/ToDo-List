import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../Store/DataProvider";
import LoadingUI from "../UI/LoadingUI";
import TaskForm from "./TaskForm";
import { addTask } from "../TaskAPIs/TaskAPI";

const AddTodoPopUp = ({ open, onClose }) => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const todoInput = useRef();

  const handleAddTodo = async () => {
    if (!todoName.trim()) {
      setIsEmpty(true);
      return;
    }

    setIsAddingTask(true);

    const newTodo = { name: todoName, complete: false };

    try {
      const newTodoId = await addTask(newTodo);
      const newItemWithId = { ...newTodo, id: newTodoId };
      setTodos([...todos, newItemWithId]);
      setIsAddingTask(false);
      setTodoName("");
      onClose();
    } catch (error) {
      setIsAddingTask(false);
    }
  };

  useEffect(() => {
    if (!open && todoInput.current) {
      todoInput.current.focus();
    }
  }, [open]);

  return (
    <>
      {isAddingTask ? (
        <LoadingUI text={"Adding New Task..."} />
      ) : (
        <TaskForm
          open={open}
          onClose={onClose}
          todoInput={todoInput}
          todoName={todoName}
          isEmpty={isEmpty}
          setTodoName={setTodoName}
          setIsEmpty={setIsEmpty}
          handleAddTodo={handleAddTodo}
        />
      )}
    </>
  );
};

export default AddTodoPopUp;
