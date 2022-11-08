import { Button, ButtonProps } from "@material-ui/core";

export const CommonButton: React.FC<ButtonProps> = (props) => {
  const { ...buttonProps } = props;
  return (
    <Button
      {...buttonProps}
      variant="contained"
      style={{ width: "100%", height: "44px", marginBottom: "16px" }}
    />
  );
};
