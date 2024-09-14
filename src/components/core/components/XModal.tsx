import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// title

// isEscapable,
// escapeCallback

// hasSelection
// positiveCallback,
// negativeCallback,

// neutrallCallback
export default function XModal(props) {
  const { t } = useTranslation();

  const handleEscape = () => {
    props.escapeCallback();
  };

  return (
    <BootstrapDialog
      onClose={props.isEscapable ? handleEscape : undefined}
      open={props.isOpen}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>{props.title}</DialogTitle>

      {/* close button */}
      {props.isEscapable && (
        <IconButton
          onClick={handleEscape}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon color="info" />
        </IconButton>
      )}
      <DialogContent dividers>{props.children}</DialogContent>
      <DialogActions>
        {/* neutral action */}
        {!props.hasSelection && (
          <Button onClick={handleEscape} color="info" variant="outlined">
            {t("common.close")}
          </Button>
        )}

        {/* selection action */}
        {props.hasSelection && (
          <>
            {/* error button */}
            <Button
              onClick={props.negativeCallback}
              color="error"
              variant="outlined"
            >
              Error Button
            </Button>

            {/* success button */}
            <Button
              onClick={props.positiveCallback}
              color="info"
              variant="outlined"
            >
              Success Button
            </Button>
          </>
        )}
      </DialogActions>
    </BootstrapDialog>
  );
}
