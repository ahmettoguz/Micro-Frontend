import { Box, Link, Typography, useTheme } from "@mui/material";
import { ThemeModeEnum } from "../../enum/ThemeEnum";
import { grey } from "@mui/material/colors";

export default function XFooter() {
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
          fontStyle: "italic",
          background:
            theme.palette.mode === ThemeModeEnum.Dark
              ? `linear-gradient(90deg, ${theme.palette.primary.main} -150%, black 50%, ${theme.palette.primary.main} 250%)`
              : "linear-gradient(90deg, gray -150%, black 50%, gray 250%)",
        }}
      >
        <Link
          href="https://github.com/ahmettoguz"
          target="_blank"
          sx={{
            color: theme.palette.mode === "dark" ? "primary.main" : grey[400],
            textDecoration: "none",
            "&:hover": {},
          }}
        >
          Developed by Ahmet Oğuz Ergin
        </Link>
      </Typography>
    </Box>
  );
}
