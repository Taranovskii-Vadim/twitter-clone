import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: "12px 12px 5px 12px",
    borderBottom: `1px solid ${grey[300]}`,
  },
  rootHeader: {
    display: "flex",
    marginBottom: 10,
  },
  rootText: { fontSize: 20 },
  rootPicture: {
    width: "100%",
    borderRadius: 10,
    marginTop: 7,
  },
  rootTime: {
    marginTop: 7,
    fontSize: 14,
    paddingBottom: 10,
    color: grey[500],
    borderBottom: `1px solid ${grey[300]}`,
  },
  rootTweetInfo: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
    borderBottom: `1px solid ${grey[300]}`,
    "& p": {
      color: grey[500],
      fontSize: 14,
      "& b": {
        color: grey[900],
      },
      "&:first-child": {
        marginRight: 10,
      },
    },
  },
  rootAvatar: {
    marginRight: 15,
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
    paddingTop: 5,
    justifyContent: "space-around",
  },
}));
