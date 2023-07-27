import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const list = useSelector(state => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="list-group my-5 border border-light">
        {list?.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
