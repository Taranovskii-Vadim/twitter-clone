import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  rightSide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "0 0 50%",
  },
  enterBlock: {
    width: 380,
  },
  enterBlockIcon: {
    fontSize: 50,
    marginBottom: 15,
  },
  enterBlockTitle: {
    fontWeight: 800,
    marginBottom: 45,
  },
}));
