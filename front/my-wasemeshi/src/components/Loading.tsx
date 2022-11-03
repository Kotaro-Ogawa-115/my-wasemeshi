import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

const Loading: React.FC = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <CircularProgress size={120} style={{ margin: 32 }} />
    </Grid>
  );
};

export default Loading;
