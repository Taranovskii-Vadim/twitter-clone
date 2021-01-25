import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey[100],
    borderRadius: 15,
    marginBottom: 20,
  },
  rootTitle: {
    fontWeight: 900,
    fontSize: 19,
  },
  rootLink: {
    color: grey[900],
    textDecoration: "none",
    "&:not(:first-child)": {
      "& li": {
        transition: "0.2s all linear",
        "&:hover": {
          backgroundColor: grey[300],
        },
      },
    },
    "&:last-child": {
      "& li": {
        borderBottom: "none",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
    },
  },
  rootItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    borderBottom: `1px solid ${grey[300]}`,
  },
  rootItemTitle: {
    fontWeight: 700,
    fontSize: 14,
  },
  rootItemTweets: {
    color: grey[500],
  },
}));
