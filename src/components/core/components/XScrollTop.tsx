import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

const XScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      color="primary"
      size="medium"
      sx={{
        position: "fixed",
        bottom: 30,
        right: 16,
        zIndex: 1000,
        transition: "opacity 0.2s ease, transform 0.5s ease",
        opacity: showButton ? 1 : 0,
        transform: showButton ? "translateY(0)" : "translateY(100px)",
      }}
      onClick={handleClick}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default XScrollTop;
