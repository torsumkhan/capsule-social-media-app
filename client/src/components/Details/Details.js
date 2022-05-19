import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { getCapsule } from "../../actions/capsules";

const Details = () => {
  const { post: capsule } = useSelector((state) => {
    console.log(state);
    return state.capsules;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCapsule(id));
  }, [id]);

  useEffect(() => {
    console.log(capsule);
  }, [capsule]);

  if (!capsule) {
    return <></>;
  }
  return <div>{capsule.selectFile}</div>;
};

export default Details;
