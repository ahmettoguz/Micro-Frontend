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
import logo from "../../assets/logo.svg";
import XToggleColorMode from "../../core-coponents/XToggleColorMode";
import XToggleThemeMode from "../../core-coponents/XToggleThemeMode";
import { capitalizeFirstLetter } from "../../utils/stringFunctions";

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
  "features",
  "testimonials",
  "highlights",
  "pricing",
];

const isThemeChangeEnabled =
  import.meta.env.VITE_APP_ENABLE_THEME_CHANGE === "true";

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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      // close drawer
      setOpen(false);
    }
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
          {leftMenuItemIdList.map((id) => (
            <MenuItem
              key={id}
              onClick={() => scrollToSection(id)}
              sx={{ py: "10px", px: "12px" }}
            >
              <Typography variant="body2" color="text.primary">
                {capitalizeFirstLetter(id)}
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

        {isThemeChangeEnabled && (
          <XToggleThemeMode
            themeSchema={themeSchema}
            toggleTheme={toggleTheme}
          />
        )}

        <Button
          color="primary"
          variant="text"
          size="small"
          component="a"
          href="/material-ui/getting-started/templates/sign-in/"
          target="_blank"
        >
          Sign in
        </Button>

        <Button
          color="primary"
          variant="contained"
          size="small"
          component="a"
          href="/material-ui/getting-started/templates/sign-up/"
          target="_blank"
        >
          Sign up
        </Button>
      </Box>
    );
  };

  const renderSmallDrawerItems = () => {
    return (
      <Box sx={{ display: { sm: "", md: "none" } }}>
        <Button
          variant="text"
          color="primary"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ minWidth: "30px", p: "4px" }}
        >
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
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
                flexDirection: "column",
                alignItems: "end",
                flexGrow: 1,
              }}
            >
              <XToggleColorMode
                themeMode={themeMode}
                toggleColorMode={toggleColorMode}
              />
            </Box>
            <MenuItem onClick={() => scrollToSection("features")}>
              Features
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("highlights")}>
              Highlights
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("pricing")}>
              Pricing
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
            <Divider />
            <MenuItem>
              <Button
                color="primary"
                variant="contained"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
                sx={{ width: "100%" }}
              >
                Sign up
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color="primary"
                variant="outlined"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
                sx={{ width: "100%" }}
              >
                Sign in
              </Button>
            </MenuItem>
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
          transition: "0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          mt: scrolledToBottom ? 0 : 3,
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
