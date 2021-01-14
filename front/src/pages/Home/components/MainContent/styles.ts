import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  wrapper: {
    height: "100%",
  },
  header: {
    fontWeight: "bold",
    padding: 15,
    fontSize: 18,
    borderBottom: `1px solid ${grey[300]}`,
  },
}));
