import CloseIcon from "@mui/icons-material/Close";
import { Grow, IconButton } from "@mui/material";
import { useSnackbar, VariantType } from "notistack";

export const useSnackbarUtils = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  /**
   * Displays a snackbar notification.
   *
   * @param message - The message to display in the snackbar.
   * @param variant - The variant of the snackbar. Options are "default", "success", "error", "warning", or "info". Defaults to "default".
   * @param duration - The duration (in milliseconds) to auto-hide the snackbar. Defaults to 2000 milliseconds.
   */
  const showSnackbar = (
    message,
    variant: VariantType = "default",
    autoHideDuration = 2000
  ) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration,
      action: (key) => (
        <IconButton
          color="inherit"
          size="small"
          onClick={() => closeSnackbar(key)}
        >
          <CloseIcon />
        </IconButton>
      ),

      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },

      TransitionComponent: Grow,
    });
  };

  return {
    showSnackbar,
  };
};
