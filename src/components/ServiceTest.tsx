import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import { XLoadingButton } from "../core-coponents/XLoadingButton";
import { useSnackbarUtils } from "../utils/useSnackbarUtils";

export const ServiceTest = () => {
  const theme = useTheme();
  const { showSnackbar } = useSnackbarUtils();
  const [loadingBtnBackendHC, setLoadingBtnBackendHC] = useState(false);
  const [loadingBtnServiceHC, sestLoadingBtnServiceHC] = useState(false);
  const [loadingBtnService, setLoadingBtnService] = useState(false);

  const handleBackendHealthCheck = async () => {
    setLoadingBtnBackendHC(true);

    try {
      // Dummy request with axios
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      showSnackbar("dummy", "success");
    } catch (error) {
      showSnackbar("dummy", "error");
    } finally {
      setLoadingBtnBackendHC(false);
    }
  };
  
  const handleServiceHealthCheck = async () => {
    sestLoadingBtnServiceHC(true);

    try {
      // Dummy request with axios
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      showSnackbar("dummy", "success");
    } catch (error) {
      showSnackbar("dummy", "error");
    } finally {
      sestLoadingBtnServiceHC(false);
    }
  };

  const handleEmailServiceTest = async () => {
    setLoadingBtnService(true);

    try {
      // Dummy request with axios
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      showSnackbar("dummy", "success");
    } catch (error) {
      showSnackbar("dummy", "error");
    } finally {
      setLoadingBtnService(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
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
          Micro Service Test
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
          }}
        >
          Check the status and health of our services. Ensure everything is
          running smoothly.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <XLoadingButton
            variant="outlined"
            color="primary"
            size="large"
            loading={loadingBtnBackendHC}
            onClick={handleBackendHealthCheck}
          >
            <span>Backend Health Check</span>
          </XLoadingButton>

          <XLoadingButton
            variant="contained"
            color="primary"
            size="large"
            loading={loadingBtnService}
            onClick={handleEmailServiceTest}
          >
            <span>Service Test</span>
          </XLoadingButton>

          <XLoadingButton
            variant="outlined"
            color="primary"
            size="large"
            loading={loadingBtnServiceHC}
            onClick={handleServiceHealthCheck}
          >
            <span>Service Health Check</span>
          </XLoadingButton>
        </Box>
      </Box>
    </Container>
  );
};
