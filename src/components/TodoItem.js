import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/index";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const TodoItem = ({ id, text, completed }) => {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();

  const styled = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: completed ? "#008000" : "#ffffff",
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = (e) => {
    setChecked(e.target.checked);
    dispatch(toggleTodo(id));
  };

  return (
    <li style={styled}>
      <h4>{text}</h4>
      <div className="todo-icon">
        <Checkbox
          checked={checked}
          onChange={hanldeToggle}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Button variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
