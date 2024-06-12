import * as React from "react";
import Switch from "@mui/material/Switch";
import MessagesList from "./Task33";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [checked, setChecked] = React.useState(true);
  const [theme, setTheme] = useState("light");

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setTheme("dark");
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("body").style.color = "white";
    } else {
      setTheme("light");
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
    }
  };

  return (
    <>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <MessagesList Theme={theme} />
    </>
  );
}
