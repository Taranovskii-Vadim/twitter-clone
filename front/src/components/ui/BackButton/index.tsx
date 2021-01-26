import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const BackButton: React.FC = (): JSX.Element => {
  const history = useHistory();

  const backClickHandler = (): void => {
    history.goBack();
  };

  return (
    <IconButton
      onClick={backClickHandler}
      size='small'
      style={{ marginRight: 15 }}
      color='primary'
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
