import { Grid } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

const GridWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Grid container>
      <Grid xs={2} />
      <Grid xs={8} style={{ marginTop: 16 }}>
        {children}
      </Grid>
      <Grid xs={2} />
    </Grid>
  );
};

export default GridWrapper;
