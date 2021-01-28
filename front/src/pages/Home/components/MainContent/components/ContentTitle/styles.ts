import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${grey[300]}`,
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
}));
