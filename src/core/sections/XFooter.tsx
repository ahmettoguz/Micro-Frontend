import { Box, Link, Typography, useTheme } from "@mui/material";
import { ThemeModeEnum } from "../../enum/ThemeEnum";
import { memo } from "react";

const XFooter = memo(() => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100dvw",
        bottom: 0,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          fontStyle: "italic",
          background:
            theme.palette.mode === ThemeModeEnum.Dark
              ? `linear-gradient(45deg, #02294F, #090E10 50%, #02294F)`
              : `linear-gradient(45deg, #CEE5FD, white 50%, #CEE5FD)`,
          color:
            theme.palette.mode === "dark" ? "primary.main" : "primary.dark",
        }}
      >
        <Link
          href="https://github.com/ahmettoguz"
          target="_blank"
          sx={{
            textDecoration: "none",
            "&:hover": {},
          }}
        >
          Developed by Ahmet Oğuz Ergin
        </Link>
      </Typography>
    </Box>
  );
});

export default XFooter;
