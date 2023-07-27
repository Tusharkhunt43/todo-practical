import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/index";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [error,setError] = useState(false);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleInputChange = (e) =>{
    setText(e.target.value)
    setError(false);
  }

  const handleSubmit = (event) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
        setError(true)
    }
    event.preventDefault();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <TextField
          error = {error ? true : false}
            id="outlined-basic"
            placeholder={error ? "Please Enter Todo Item" : "Add a todo item"}
            label={error ? "Please Enter Todo Item" : "Type Todo"}
            value={text}
            variant="outlined"
            onChange={handleInputChange}
          />
          <Button style={{marginLeft:'5px'}} variant="contained" onClick={handleSubmit}>
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
