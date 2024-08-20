import RocketLaunch from "@mui/icons-material/RocketLaunch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { appName } from "../../utils/envVars";
import { scrollToSection } from "../../utils/scrollUtils";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        height: "100dvh",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF 50%)"
            : "linear-gradient(#02294F, #090E10 50%)",
        backgroundSize: "cover",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" }, alignItems: "center" }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            {`${appName.split(" ")[0]} ${appName.split(" ")[1]}`} &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                fontWeight: 500,
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              {`${appName.split(" ")[2]}`}
            </Typography>
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "90%" } }}
          >
            {t("hero.appDescription", { appIcon: "🚀" })}
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            endIcon={<RocketLaunch />}
            onClick={() => scrollToSection("email-service")}
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 20,
              fontSize: "1.1rem",
              textTransform: "none",
              maxWidth: "250px",
              width: "100%",
              boxShadow: "0 4px 8px rgba(0, 100, 100, 0.5)",
              ":hover": {
                boxShadow: "0 4px 8px rgba(0, 100, 100, 0.8)",
              },
            }}
          >
            {t("hero.discover")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
