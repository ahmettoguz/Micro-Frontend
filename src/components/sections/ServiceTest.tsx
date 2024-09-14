import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { t } from "i18next";
import { useState } from "react";
import { useSnackbarUtils } from "../../utils/useSnackbarUtils";
import { XLoadingButton } from "../core/components/XLoadingButton";

export const ServiceTest = () => {
  const theme = useTheme();
  const { showSnackbar } = useSnackbarUtils();
  const [loadingBtnBackendHC, setLoadingBtnBackendHC] = useState(false);
  const [loadingBtnServiceHC, sestLoadingBtnServiceHC] = useState(false);
  const [loadingBtnService, setLoadingBtnService] = useState(false);

  const handleBackendHealthCheck = async () => {
    setLoadingBtnBackendHC(true);

    try {
      const response = await axios.get(
        "https://backend.localhost/api/health-check/info"
      );
      console.log("Response data:");
      console.info(response.data.data);

      showSnackbar(t("test.snackbar.serviceUp"), "success");
    } catch (error) {
      showSnackbar(t("test.snackbar.serviceDown"), "error");
    } finally {
      setLoadingBtnBackendHC(false);
    }
  };

  const handleServiceHealthCheck = async () => {
    sestLoadingBtnServiceHC(true);

    try {
      const response = await axios.get(
        "https://email.localhost/email/health-check/info"
      );
      console.log("Response data:");
      console.info(response.data.data);

      showSnackbar(t("test.snackbar.serviceUp"), "success");
    } catch (error) {
      showSnackbar(t("test.snackbar.serviceDown"), "error");
    } finally {
      sestLoadingBtnServiceHC(false);
    }
  };

  const handleEmailServiceTest = async () => {
    setLoadingBtnService(true);

    try {
      const response = await axios.post(
        "https://email.localhost/email/service/send",
        {
          subject: "Support Mail",
          recipients: ["dummyuser@gmail.com", "exampleuser@hotmail.com"],
          body: "Hii! This is support mail. Do not reply that.",
        }
      );
      console.log("Response:", response.data);

      showSnackbar(t("test.snackbar.testSuccess"), "success");
    } catch (error) {
      showSnackbar(t("test.snackbar.testError"), "error");
    } finally {
      setLoadingBtnService(false);
    }
  };

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
        id="service-test"
        sx={{
          textAlign: "center",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 6,
          p: 4,
          mt: 5,
          mx: "auto",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 8,
          },
          backgroundImage:
            theme.palette.mode === "light"
              ? `radial-gradient(circle at 50% -50%, ${theme.palette.primary.light} 15%, rgba(255, 255, 255, 0.8))`
              : `radial-gradient(circle at 50% -50%,${theme.palette.primary.dark} 15%, rgba(0, 0, 0, 0.8))`,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "text.primary",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {t("test.microServiceTest")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
          }}
        >
          {t("test.checkTheStatus")}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <XLoadingButton
            variant="outlined"
            color="primary"
            size="large"
            loading={loadingBtnBackendHC}
            onClick={handleBackendHealthCheck}
          >
            <span> {t("test.backendHealthCheck")}</span>
          </XLoadingButton>

          <XLoadingButton
            variant="contained"
            color="primary"
            size="large"
            loading={loadingBtnService}
            onClick={handleEmailServiceTest}
          >
            <span>{t("test.serviceTest")}</span>
          </XLoadingButton>

          <XLoadingButton
            variant="outlined"
            color="primary"
            size="large"
            loading={loadingBtnServiceHC}
            onClick={handleServiceHealthCheck}
          >
            <span>{t("test.serviceHealthCheck")}</span>
          </XLoadingButton>
        </Box>
      </Box>
    </Container>
  );
};
