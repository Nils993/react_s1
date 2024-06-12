import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value !== "") {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value !== "") {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div>
      <TextField
        label="Градусы Цельсия"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Градусы Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;
