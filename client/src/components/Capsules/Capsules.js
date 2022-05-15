import React from "react";
import Capsule from "./Capsule/Capsule";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Capsules = () => {
  const capsules = useSelector((state) => state.capsules);
  const classes = useStyles();
  console.log(capsules);
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
