import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { ColorModeContext } from "../utils/ThemeProvider";

const MenuBar = () => {
  const colorMode: any = useContext(ColorModeContext);
  console.log(colorMode);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Email App
        </Typography>
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
          {colorMode.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
