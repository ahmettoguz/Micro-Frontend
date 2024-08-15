import React , {useState}from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MyAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Email SPA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        Drawer content
      </Drawer>
    </>
  );
}

export default MyAppBar;
