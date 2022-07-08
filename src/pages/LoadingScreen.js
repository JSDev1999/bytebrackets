import { Box, CircularProgress } from "@mui/material";
import React, { Fragment } from "react";

export default function LoadingScreen() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Fragment>
        <CircularProgress color="primary" />
      </Fragment>
      Loading...
    </Box>
  );
}
