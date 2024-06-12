import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoLis = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TextField
        label="Новая задача"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddTask}>
        Добавить задачу
      </Button>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Card elevation={3}>
              <CardContent>
                <ListItemText primary={task} />
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteTask(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoLis;
