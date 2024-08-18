import { Box, Link, Typography } from "@mui/material";

export default function XFooter() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100dvw",
        bottom: 0,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontStyle: "italic",
          background:
            "linear-gradient(90deg, gray -150%, black 50%, gray 250%)",
        }}
      >
        <Link
          href="#"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            textDecoration: "none",
          }}
        >
          Developed by Ahmet Oğuz Ergin
        </Link>
      </Typography>
    </Box>
  );
}

// /* footer */
// footer {
//     ;
//     text-align: center;
//   }
