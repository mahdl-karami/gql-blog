import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <Box sx={{ width: "100%", position: "fixed", top: "0" }}>
      <LinearProgress />
    </Box>
  );
};

export default Loading;
