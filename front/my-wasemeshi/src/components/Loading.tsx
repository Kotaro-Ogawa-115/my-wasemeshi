import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading: React.FC = () => {
  return <CircularProgress size={120} style={{ margin: 32 }} />;
};

export default Loading;
