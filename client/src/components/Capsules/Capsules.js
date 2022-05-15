import React from "react";
import Capsule from "./Capsule/Capsule";
import useStyles from "./styles";

const Capsules = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Capsules</h1>
      <Capsule />
      <Capsule />
      <Capsule />
      <Capsule />
    </>
  );
};

export default Capsules;
