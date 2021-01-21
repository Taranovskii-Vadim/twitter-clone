import React from "react";
import grey from "@material-ui/core/colors/grey";

const SeparateLine: React.FC = (): JSX.Element => {
  const styles = { width: "100%", height: 10, backgroundColor: grey[200] };
  return <div style={styles}></div>;
};

export default SeparateLine;
