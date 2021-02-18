import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    padding: "5px 10px",
    borderBottom: `1px solid ${grey[300]}`,
    transition: "all 0.2s linear",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    "&:hover": {
      backgroundColor: grey[100],
    },
  },
  rootLinkWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      flex: "auto",
    },
  },
  rootMoreBtn: {
    alignSelf: "flex-start",
  },
  rootHeader: {
    display: "flex",
    marginBottom: 10,
  },
  rootAvatar: {
    marginRight: 15,
  },
  rootText: {
    marginBottom: 10,
  },
  rootPicture: {
    width: "100%",
    borderRadius: 10,
  },
  rootUser: {
    fontSize: 15,
    fontWeight: 900,
    "& small": {
      fontWeight: 400,
      color: grey[500],
    },
  },
  rootFooter: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
