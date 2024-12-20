import { Box, Link, Typography, useTheme } from "@mui/material";
import { t } from "i18next";
import { memo } from "react";
import { ThemeModeEnum } from "../../../enum/ThemeEnum";

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
            userSelect: "none",
          }}
        >
          {t("footer.developer")}
        </Link>
      </Typography>
    </Box>
  );
});

export default XFooter;
