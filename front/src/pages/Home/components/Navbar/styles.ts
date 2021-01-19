import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    position: "sticky",
    top: 12,
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  rootLogo: {
    fontSize: 36,
  },
  navBarIcon: {
    fontSize: 28,
    marginRight: 10,
  },
  rootItem: {
    padding: "10px 10px 12px 10px",
    display: "flex",
    alignItems: "center",
    "&:first-child": {
      marginBottom: 35,
    },
    "&:not(:first-child)": {
      cursor: "pointer",
      borderRadius: 25,
      textDecoration: "none",
      color: grey[900],
      "&:hover": {
        backgroundColor: "rgba(29,161,242,0.1)",
        color: theme.palette.primary.main,
      },
    },
  },
  activeItem: {
    color: `${theme.palette.primary.main} !important`,
  },
  navBarLable: {
    fontSize: 20,
  },
}));
