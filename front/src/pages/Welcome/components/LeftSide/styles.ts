import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  leftSide: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "0 0 50%",
    backgroundColor: "#74CAFE",
  },
  leftSideTwitIcon: {
    position: "absolute",
    transform: "translate(-170px,-380px)",
    top: 0,
    left: 0,
    width: "185%",
    height: "185%",
  },
  infoList: {
    position: "relative",
    zIndex: 1,
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& li": {
      marginBottom: 40,
    },
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  leftSideIcon: {
    fontSize: 32,
    marginRight: 15,
  },
}));
