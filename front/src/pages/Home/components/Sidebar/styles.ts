import {
  createStyles,
  InputBase,
  makeStyles,
  withStyles,
} from "@material-ui/core";

export const CustomInput = withStyles(() =>
  createStyles({
    input: {
      boxSizing: "border-box",
      borderRadius: 30,
      backgroundColor: "#cccccc",
      padding: "18px 13px",
    },
  })
)(InputBase);

export const useStyles = makeStyles(theme => ({
  wrapper: {
    height: "100%",
  },
}));
