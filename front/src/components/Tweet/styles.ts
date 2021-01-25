import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    cursor: "pointer",
    color: "inherit",
    textDecoration: "none",
    padding: "5px 10px",
    borderBottom: `1px solid ${grey[300]}`,
    transition: "all 0.2s linear",
    "&:hover": {
      backgroundColor: grey[100],
    },
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
