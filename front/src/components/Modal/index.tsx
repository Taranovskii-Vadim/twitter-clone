import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

interface ModalProps {
  title: string;
  visible: boolean;
  children: React.ReactNode;
  width?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props): JSX.Element | null => {
  if (!props.visible) {
    return null;
  }

  const styles = {
    width: props.width,
  };

  return (
    <Dialog
      open={props.visible}
      onClose={props.onClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>{props.title}</DialogTitle>
      <DialogContent style={styles}>{props.children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
