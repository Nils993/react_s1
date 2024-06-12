import { useState } from "react";
import BasicCard from "./Typography.js";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TextDisplayForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <TextField
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        id="outlined-basic"
        label=" Введите текст"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained" disableElevation>
        Отобразить текст
      </Button>

      <BasicCard text={submittedValue} />
    </div>
  );
}

export default TextDisplayForm;
