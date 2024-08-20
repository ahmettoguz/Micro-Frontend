import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeModeEnum } from "../enum/ThemeEnum";
import EmailForm from "./EmailForm";

export const EmailSection = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        id="email-service"
        sx={{
          textAlign: "center",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 4,
          width: "100%",
          pt: 3,
          pb: 5,
          backgroundImage:
            theme.palette.mode === ThemeModeEnum.Light
              ? `radial-gradient(circle at 30% 30%, white 10%, ${theme.palette.primary.light})`
              : `radial-gradient(circle at 30% 30%, black 40%, ${theme.palette.primary.dark})`,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 8,
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Email Service
        </Typography>

        <EmailForm />
      </Box>
    </Container>
  );
};
