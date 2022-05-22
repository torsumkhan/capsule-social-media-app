import React, { useState, useEffect } from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createCapsule, updateCapsule } from "../../actions/capsules";

const Form = ({
  currentId,
  setCurrentId,
  handleModal,
  clearCurrentId,
  torsum,
  user,
  navbarTog,
}) => {
  const initialState = {
    name: "",
    title: "",
    text: "",
    tags: "",
    selectFile: "",
  };

  const [capsuleData, setCapsuleData] = useState(initialState);
  const capsule = useSelector((state) =>
    currentId ? state.capsules.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  const capsuleCreator = user._id;

  useEffect(() => {
    if (capsule) setCapsuleData(capsule);
  }, [capsule]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateCapsule(currentId, capsuleData));
    } else {
      const capsuleToBeCreated = { ...capsuleData, creator: capsuleCreator };
      dispatch(createCapsule(capsuleToBeCreated));
    }
    handleModal();
    clear();
    clearCurrentId();
    navbarTog();
  };
  const clear = () => {
    setCapsuleData({
      name: "",
      title: "",
      text: "",
      tags: "",
      selectFile: "",
    });
  };

  const classes = useStyles();
  return (
    <>
      <Paper className={`${classes.root} ${classes.form}`}>
        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth="true"
            value={capsuleData.name}
            onChange={(e) => {
              setCapsuleData({ ...capsuleData, name: e.target.value });
            }}
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth="true"
            value={capsuleData.title}
            onChange={(e) => {
              setCapsuleData({ ...capsuleData, title: e.target.value });
            }}
          />
          <TextField
            name="text"
            variant="outlined"
            label="Text"
            fullWidth="true"
            value={capsuleData.text}
            onChange={(e) => {
              setCapsuleData({ ...capsuleData, text: e.target.value });
            }}
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth="true"
            value={capsuleData.tags}
            onChange={(e) => {
              setCapsuleData({
                ...capsuleData,
                tags: e.target.value.split(","),
              });
            }}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setCapsuleData({ ...capsuleData, selectFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            size="large"
            type="submit"
            fullWidth="true"
            style={{ backgroundColor: "#9b5de5", color: "white" }}
          >
            {!torsum ? "Submit" : "Update"}
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="outlined"
            color="secondary"
            size="large"
            onClick={clear}
            fullWidth="true"
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
