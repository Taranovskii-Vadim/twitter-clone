import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: "5px 10px",
  },
  avatarBlock: {
    display: "flex",
    alignItems: "top",
    marginRight: 10,
  },
  rootFormBlock: {
    width: "100%",
  },
  rootTextArea: {
    maxWidth: "100%",
    width: "100%",
    border: "none",
    resize: "none",
    marginBottom: 10,
    outline: "none",
  },
  rootFormFooter: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: `1px solid ${grey[300]}`,
    padding: "10px 0px",
  },
  rootFormFooterItem: {
    display: "flex",
    alignItems: "center",
  },
  rootFormFooterBtn: {
    marginLeft: 10,
    padding: "4px 20px",
  },
}));
