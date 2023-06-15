import React, { useState } from 'react';
import {
  
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
} from '@mui/material';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText !== '') {
      setTodos([...todos, {text: todoText, done:false}]);
      setTodoText('');
    }
  };


  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, done: !todo.done };
      }

      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Container maxWidth="sm" >
      <Typography variant="h4" component="h1" align="center" gutterBottom
    sx={{
      fontFamily:["Lucida Console", "Courier New"],
      mx:0
  }}
      >
        Gidi's To-Do List
      </Typography>
      <TextField
        label="Add a to-do"
        fullWidth
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        margin="normal"
        variant="outlined"
        
      />
      <Button
        type='submit' 
        variant="contained"
        color="secondary"
        sx={{fontFamily:[ "Lucida Console", "Courier New"]
      }}
        fullLength
        onClick={handleAddTodo}
      >
        Add
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <Checkbox
            checked={todo.done}
            onChange={() => handleToggleTodo()}
            />
            <ListItemText primary={todo.text}
             style={todo.done ? { textDecoration: 'line-through' } : {}}
            />
            {!todo.done && (
            <ListItemSecondaryAction>
            <Button
              variant="outlined"
              sx={
                {fontWeight:'bold',
                 color : 'black',
                 fontFamily:[ "Lucida Console", "Courier New"]
                 
              }}
              onClick={() => handleToggleTodo(index)}
            >
              delete
            </Button>
            </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
