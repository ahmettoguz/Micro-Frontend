import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Chip,
  CircularProgress,
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

  const theme = useTheme();

  const handleAddReceiver = () => {
    if (
      emailReceiver.trim() !== "" &&
      !emailReceivers.includes(emailReceiver)
    ) {
      setEmailReceivers([...emailReceivers, emailReceiver.trim()]);
      setEmailReceiver("");
    } else {
      setSnackbarConfigs({
        isOpen: true,
        color: "error",
        message: "Please add receiver.",
      });
    }
  };

  const handleDeleteReceiver = (receiverToDelete) => {
    setEmailReceivers(
      emailReceivers.filter((receiver) => receiver !== receiverToDelete)
    );
  };

  const handleSend = async () => {
    if (emailReceivers.length === 0 || !content) {
      setSnackbarConfigs({
        isOpen: true,
        color: "error",
        message: "Fill required fields!",
      });
      return;
    }

    console.log("Sending email to:");
    console.log(emailReceivers);
    console.log("Email content:");
    console.log(content);

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

      console.log("email sent successfully: ", response.data);

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
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        "&:hover": {
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 4px 20px rgba(255,255,255,0.2)"
              : "0 4px 20px rgba(0,0,0,0.2)",
        },
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Send Email
      </Typography>
      <Typography
        variant="subtitle1"
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
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            fullWidth
            label="Email Receiver"
            value={emailReceiver}
            onChange={(e) => setEmailReceiver(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  boxShadow: "0 0 8px rgba(0,123,255,0.5)",
                },
              },
            }}
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
            }}
          >
            <PersonAddIcon />
          </Button>
        </Box>

        {/* receivers chips */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {emailReceivers.map((receiver, index) => (
            <Chip
              key={index}
              label={receiver}
              onDelete={() => handleDeleteReceiver(receiver)}
              sx={{ mb: 1 }}
            />
          ))}
        </Box>

        {/* email content text field */}
        <TextField
          fullWidth
          label="Email Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={4}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                boxShadow: "0 0 3px rgba(0,123,255,0.5)",
              },
            },
          }}
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
          sx={{
            borderRadius: "8px",
            background:
              "linear-gradient(90deg, rgba(33,150,243,1) 0%, rgba(30,87,153,1) 100%)",
            textTransform: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(33,150,243,0.4)",
            display: "flex",
            "&:disabled": {
              background:
                "linear-gradient(90deg, rgba(33,150,243,0.5) 0%, rgba(30,87,153,0.5) 100%)",
            },
            "& .MuiCircularProgress-root": {
              color: "white",
            },
          }}
        >
          <span>Send</span>
        </LoadingButton>
      </Box>

      <XSnackbar onCallback={setSnackbarConfigs} configs={snackbarConfigs} />
    </Paper>
  );
}
