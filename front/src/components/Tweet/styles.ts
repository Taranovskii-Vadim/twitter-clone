import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    cursor: "pointer",
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
