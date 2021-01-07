import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  navBarList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navBarLogo: {
    fontSize: 36,
  },
  navBarIcon: {
    fontSize: 28,
  },
  navBarListItem: {
    display: "flex",
    alignItems: "center",
    "&:first-child": {
      marginBottom: 35,
    },
  },
  navBarIconButton: {
    marginRight: 15,
  },
  navBarLable: {
    fontSize: 20,
  },
}));
