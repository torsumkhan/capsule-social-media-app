import React, { useEffect, useState } from "react";
import Capsule from "./Capsule/Capsule";
import { Container } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Masonry from "react-masonry-css";
import { useDispatch } from "react-redux";
import { getCapsules } from "../../actions/capsules";
import "./masonry.css";

const Capsules = ({ setCurrentId, handleModal, showNav, updateForm, user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const dispatchFunc = async () => {
      console.log(await dispatch(getCapsules()));
    };
    dispatchFunc();
    dispatch(getCapsules());
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const capsules = useSelector((state) => state.capsules);
  const [filteredCaps, setFilteredCaps] = useState([]);

  const classes = useStyles();

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    setFilteredCaps(capsules);
  }, [capsules]);

  useEffect(() => {
    if (Array.isArray(capsules)) {
      const newCapsules = capsules.filter((c) => {
        return c.tags.includes(searchTerm);
      });
      if (searchTerm === "") {
        setFilteredCaps(capsules);
      } else {
        setFilteredCaps(newCapsules);
      }
    }
  }, [searchTerm]);

  const searchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return !Array.isArray(filteredCaps) ||
    (filteredCaps.length === 0 && searchTerm === "") ? (
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
          style={{
            width: "75%",
            height: "10px",
            borderRadius: "10px",
            fontSize: "16px",
            padding: "20px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          }}
          type="text"
          placeholder="Search tags..."
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
