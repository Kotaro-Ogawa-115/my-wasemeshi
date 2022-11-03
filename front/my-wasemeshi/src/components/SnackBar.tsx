import { Snackbar, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SnackBar: React.FC = () => {
  const locationObject = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (locationObject.state === "OK") {
      setIsOpen(true);
    }
  }, [locationObject]);

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      autoHideDuration={6000}
      onClose={handleClose}
      action={
        <IconButton size="small" color="inherit" onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      }
    >
      <Alert severity="success" onClose={handleClose}>
        更新しました
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
