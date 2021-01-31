import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 340,
  },
  rootIcon: {
    fontSize: 100,
  },
  rootText: {
    color: grey[400],
  },
}));
