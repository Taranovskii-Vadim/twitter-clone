import {
  createStyles,
  InputBase,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const CustomInput = withStyles(theme =>
  createStyles({
    input: {
      boxSizing: "border-box",
      borderRadius: 30,
      marginBottom: 20,
      backgroundColor: grey[200],
      border: `1px solid ${grey[200]}`,
      padding: "18px 13px",
      "&:focus": {
        backgroundColor: "white",
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
  })
)(InputBase);

export const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "sticky",
    top: 12,
  },
}));
