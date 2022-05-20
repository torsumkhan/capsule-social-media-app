import React, { useEffect, useState } from "react";
import Capsule from "./Capsule/Capsule";
import { Container, Grid } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Masonry from "react-masonry-css";
import "./masonry.css";
import { textAlign } from "@mui/system";

const Capsules = ({ setCurrentId, handleModal, showNav, updateForm, user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const capsules = useSelector((state) => state.capsules);
  const [filteredCaps, setFilteredCaps] = useState([]);

  const classes = useStyles();
  console.log("This is the tags", capsules);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    console.log("filteredcaps", capsules);
    setFilteredCaps(capsules);
  }, [capsules]);

  useEffect(() => {
    const newCapsules = capsules.filter((c) => {
      return c.tags.includes(searchTerm);
    });
    if (searchTerm === "") {
      setFilteredCaps(capsules);
    } else {
      setFilteredCaps(newCapsules);
    }
  }, [searchTerm]);

  const searchOnChange = (e) => {
    console.log("This is target value", e.target.value);
    setSearchTerm(e.target.value);
  };

  return !capsules.length ? (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <Container>
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ widt: "300px", height: "40px" }}
          type="text"
          placeholder="Search"
          onChange={searchOnChange}
        />
      </div>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredCaps.map((capsule) => (
          <div item key={capsule._id}>
            <Capsule
              capsule={capsule}
              setCurrentId={setCurrentId}
              handleModal={handleModal}
              showNav={showNav}
              updateForm={updateForm}
              user={user}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Capsules;
