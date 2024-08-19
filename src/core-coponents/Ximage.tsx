import { alpha, Box } from "@mui/material";

export const XImage = ({ children }) => {
  return (
    <Box
      id="image"
      sx={(theme) => ({
        mt: { xs: 8, sm: 10 },
        alignSelf: "center",
        height: { xs: 200, sm: 700 },
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? 'url("/static/images/templates/templates-images/hero-light.png")'
            : 'url("/static/images/templates/templates-images/hero-dark.png")',
        backgroundSize: "cover",
        borderRadius: "10px",
        outline: "1px solid",
        outlineColor:
          theme.palette.mode === "light"
            ? alpha("#BFCCD9", 0.5)
            : alpha("#9CCCFC", 0.1),
        boxShadow:
          theme.palette.mode === "light"
            ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
      })}
    />
  );
};


// <Container
//             sx={{
//               pt: 3,
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Paper
//               sx={{
//                 width: "400px",
//                 height: "150px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 elevation: 3,
//                 p: 2,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={logo}
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                 }}
//               />
//             </Paper>
//           </Container>