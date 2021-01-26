import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: "5px 10px",
  },
  avatarBlock: {
    display: "flex",
    alignItems: "top",
    marginRight: 15,
  },
  userInfo: {
    fontSize: 15,
    fontWeight: 900,
    "& small": {
      fontWeight: 400,
      color: grey[500],
    },
  },
  message: {
    margin: 0,
  },
}));
