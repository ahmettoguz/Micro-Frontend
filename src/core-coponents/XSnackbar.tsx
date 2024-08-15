/**
 * A custom Snackbar component that displays alerts based on configurations passed via props.
 *
 * @component
 * @example
 * // In parent component use state:
 * const [snackbarConfigs, setSnackbarConfigs] = useState({
 *     isOpen: false,
 *     message: "",
 *     color: "",
 * });
 *
 * // In parent component use component:
 * <XSnackbar onCallback={setSnackbarConfigs} configs={snackbarConfigs} />
 */

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function XSnackbar({ configs, onCallback }) {
  const handleSnackbarClose = (event, reason?) => {
    if (reason === "clickaway") {
      return;
    }

    onCallback((prevConfigs) => ({ ...prevConfigs, isOpen: false }));
  };

  return (
    <Snackbar
      open={configs.isOpen}
      autoHideDuration={2000}
      onClose={handleSnackbarClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={configs.color}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {configs.message}
      </Alert>
    </Snackbar>
  );
}
