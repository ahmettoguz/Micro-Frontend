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
          fontWeight: 500,
          fontStyle: "italic",
          background:
            theme.palette.mode === ThemeModeEnum.Dark
              ? `linear-gradient(90deg, ${theme.palette.primary.main} -150%, black 50%, ${theme.palette.primary.main} 250%)`
              : `linear-gradient(90deg, ${theme.palette.primary.main} -50%, white 50%, ${theme.palette.primary.main} 150%)`,
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
}
