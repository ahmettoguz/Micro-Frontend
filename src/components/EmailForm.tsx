import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Chip,
  CircularProgress,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import XSnackbar from "../core-coponents/XSnackbar";
import LoadingButton from "@mui/lab/LoadingButton";

export default function EmailForm() {
  const [emailReceivers, setEmailReceivers] = useState([]);
  const [emailReceiver, setEmailReceiver] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarConfigs, setSnackbarConfigs] = useState({
    isOpen: false,
    message: "",
    color: "",
  });
  const [contentError, setContentError] = useState(false);
  const [receiversError, setReceiversError] = useState(false);

  const theme = useTheme();

  const handleAddReceiver = () => {
    if (
      emailReceiver.trim() !== "" &&
      !emailReceivers.includes(emailReceiver)
    ) {
      setEmailReceivers([...emailReceivers, emailReceiver.trim()]);
      setEmailReceiver("");
      setReceiversError(false);
    } else {
      setSnackbarConfigs({
        isOpen: true,
        color: "error",
        message: "Please add a unique receiver.",
      });
    }
  };

  const handleDeleteReceiver = (receiverToDelete) => {
    setEmailReceivers(
      emailReceivers.filter((receiver) => receiver !== receiverToDelete)
    );
  };

  const handleSend = async () => {
    let hasError = false;

    // Validate email receivers
    if (emailReceivers.length === 0) {
      setReceiversError(true);
      hasError = true;
    } else {
      setReceiversError(false);
    }

    // Validate content
    if (!content) {
      setContentError(true);
      hasError = true;
    } else {
      setContentError(false);
    }

    if (hasError) {
      setSnackbarConfigs({
        isOpen: true,
        color: "error",
        message: "Fill required fields!",
      });
      return;
    }

    setLoading(true);

    try {
      // Dummy request with axios
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          emailReceivers,
          content,
        }
      );

      setSnackbarConfigs({
        isOpen: true,
        color: "success",
        message: "Email sent successfully!",
      });
    } catch (error) {
      setSnackbarConfigs({
        isOpen: true,
        color: "error",
        message: "Email could not be sent.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth={"sm"} sx={{ px: { xs: 0 } }}>
      <Paper
        elevation={4}
        sx={{
          px: { xs: 1, sm: 4 },
          py: 2,
          mx: "auto",
          textAlign: "left",
          "&:hover": {
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 4px 20px rgba(255,255,255,0.2)"
                : "0 4px 20px rgba(0,0,0,0.2)",
          },
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Send Email
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Fill in the details below to send your message.
        </Typography>

        {/* form */}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
        >
          {/* receiver text field */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
            <TextField
              fullWidth
              label="Email Receiver"
              value={emailReceiver}
              onChange={(e) => setEmailReceiver(e.target.value)}
              variant="outlined"
              error={receiversError}
              helperText={
                receiversError ? "At least 1 receiver is required!" : ""
              }
            />
            {/* add receiver button */}
            <Button
              variant="outlined"
              color="primary"
              onClick={handleAddReceiver}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(33,150,243,0.4)",
                display: "flex",
                alignItems: "center",
                minHeight: "4em",
              }}
            >
              <PersonAddIcon />
            </Button>
          </Box>

          {/* receivers chips */}
          {emailReceivers.length !== 0 && (
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {emailReceivers.map((receiver, index) => (
                <Chip
                  key={index}
                  label={receiver}
                  onDelete={() => handleDeleteReceiver(receiver)}
                  sx={{
                    mb: 1,
                  }}
                />
              ))}
            </Box>
          )}

          {/* email content text field */}
          <TextField
            fullWidth
            label="Email Content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setContentError(false);
            }}
            multiline
            rows={4}
            variant="outlined"
            required
            error={contentError}
            helperText={contentError ? "Content is required!" : ""}
          />

          {/* send button */}
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={handleSend}
            loading={loading}
            disabled={loading}
            size="large"
            loadingIndicator={<CircularProgress color="inherit" size={"2em"} />}
          >
            <span>Send</span>
          </LoadingButton>
        </Box>

        <XSnackbar onCallback={setSnackbarConfigs} configs={snackbarConfigs} />
      </Paper>
    </Container>
  );
}
