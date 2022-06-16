import React from "react";
import ToDoItem from "../TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
  const { toDos } = props;
  console.log(
    toDos.sort((a, b) => b.value - a.value),
    "123"
  );
  console.log(toDos);
  return (
    <div className="todo-block mx-1 px-5 pb-3 w-80 col mx-auto">
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} actions={props} />
      ))}
    </div>
  );
};

export default TodoList;
