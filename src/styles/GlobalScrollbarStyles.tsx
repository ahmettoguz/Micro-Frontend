import { useTheme } from "@mui/material";

export default function GlobalScrollbarStyles() {
  const theme = useTheme();

  return (
    <>
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${theme.palette.mode === "dark" ? "#333" : "#DDD"};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.palette.mode === "dark" ? "#555" : "#888"};
          border-radius: 20px; /* Adjust as needed */
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.palette.mode === "dark" ? "#777" : "#555"};
        }
      `}</style>
    </>
  );
}
