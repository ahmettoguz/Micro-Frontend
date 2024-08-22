import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import React from "react";

interface XLoadingButtonProps {
  variant: "text" | "outlined" | "contained";
  color:
    | "inherit"
    | "success"
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "warning";
  loading: boolean;
  onClick: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme>;
}
export const XLoadingButton: React.FC<XLoadingButtonProps> = ({
  variant,
  color,
  loading,
  onClick,
  children,
  size,
  sx,
}) => {
  return (
    <LoadingButton
      variant={variant}
      color={color}
      onClick={onClick}
      loading={loading}
      disabled={loading}
      sx={{ ...sx, textTransform: "none" }}
      size={size}
      loadingIndicator={<CircularProgress color="inherit" size={"2em"} />}
    >
      {children}
    </LoadingButton>
  );
};
