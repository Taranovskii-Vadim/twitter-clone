import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

interface ModalProps {
  title: string;
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  children,
  onClose,
}): JSX.Element | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
