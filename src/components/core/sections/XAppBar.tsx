import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { PaletteMode } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import logo from "../../../assets/logo.svg";
import { scrollToSection } from "../../../utils/scrollUtils";
import XToggleColorMode from "../components/XToggleColorMode";
import XToggleThemeMode from "../components/XToggleThemeMode";

interface LogoStyle {
  width: string;
  height: string;
  cursor: string;
}

const logoStyle: LogoStyle = {
  width: "200px",
  height: "auto",
  cursor: "pointer",
};

interface XAppBarProps {
  themeMode: PaletteMode;
  themeSchema: string;
  toggleColorMode: () => void;
  toggleTheme: () => void;
}

const leftMenuItemIdList = [
  {
    name: "Email Service",
    id: "email-service",
  },
  {
    name: "Service Test",
    id: "service-test",
  },
];

export default function XAppBar({
  themeMode,
  themeSchema,
  toggleColorMode,
  toggleTheme,
}: XAppBarProps) {
  const [open, setOpen] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if the user has scrolled to the bottom
      if (scrollTop > 100) {
        setScrolledToBottom(true);
      } else {
        setScrolledToBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  // render part
  const renderLeftItems = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "start" },
          // ml: "-18px",
          px: 0,
        }}
      >
        <a href="#" style={{ height: "100%", display: "flex" }}>
          <img src={logo} style={logoStyle} alt="logo of sendsphere" />
        </a>

        <Box sx={{ display: { xs: "none", md: "flex" }, pl: "10px" }}>
          {leftMenuItemIdList.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{ py: "10px", px: "12px" }}
            >
              <Typography variant="body2" color="text.primary">
                {item.name}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Box>
    );
  };

  const renderRightItems = () => {
    return (
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 0.5,
          alignItems: "center",
        }}
      >
        <XToggleColorMode
          themeMode={themeMode}
          toggleColorMode={toggleColorMode}
        />

        <XToggleThemeMode themeSchema={themeSchema} toggleTheme={toggleTheme} />
      </Box>
    );
  };

  const renderDrawerButton = () => {
    return (
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ minWidth: "30px", p: "4px" }}
      >
        <MenuIcon />
      </Button>
    );
  };

  const renderSmallDrawerItems = () => {
    return (
      <Box sx={{ display: { sm: "", md: "none" } }}>
        {renderDrawerButton()}
        <Drawer
          PaperProps={{
            sx: {
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            },
          }}
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              minWidth: "60dvw",
              p: 2,
              backgroundColor: "background.paper",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
                pb: 1,
              }}
            >
              <XToggleColorMode
                themeMode={themeMode}
                toggleColorMode={toggleColorMode}
              />

              <XToggleThemeMode
                themeSchema={themeSchema}
                toggleTheme={toggleTheme}
              />

              {/* close drawer button */}
              <Box sx={{ maxWidth: "32px", marginLeft: "auto" }}>
                <Button
                  variant="text"
                  onClick={toggleDrawer(false)}
                  size="small"
                  aria-label="button to close drawer"
                  sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                >
                  <CloseRoundedIcon fontSize="medium" />
                </Button>
              </Box>
            </Box>

            {leftMenuItemIdList.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => scrollToSection(item.id, () => setOpen(false))}
                sx={{ py: "10px", px: "15px" }}
              >
                {item.name}
              </MenuItem>
            ))}

            <Divider />
          </Box>
        </Drawer>
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          transition: "margin-top 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          mt: scrolledToBottom ? 1 : 3,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                themeMode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                themeMode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            }}
          >
            {renderLeftItems()}

            {renderRightItems()}

            {renderSmallDrawerItems()}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
