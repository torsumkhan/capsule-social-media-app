import React from "react";
import Capsule from "./Capsule/Capsule";
import { Container, Grid } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Masonry from "react-masonry-css";
import "./masonry.css";

const Capsules = ({ setCurrentId }) => {
  const capsules = useSelector((state) => state.capsules);
  const classes = useStyles();
  console.log(capsules);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return !capsules.length < 0 ? (
    <CircularProgress />
  ) : (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {capsules.map((capsule) => (
          <div item key={capsule._id}>
            <Capsule capsule={capsule} setCurrentId={setCurrentId} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Capsules;
