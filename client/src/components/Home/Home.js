import React, { useEffect, useState } from "react";
import Header from "../UIComponents/Header";
import Form from "../Form/Form";
import Capsules from "../Capsules/Capsules";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import {
  Container,
  Grow,
  Grid,
  Box,
  Modal,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getCapsules } from "../../actions/capsules";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const Home = ({ setLoginUser, user, capsule }) => {
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [updateForm, setUpdateForm] = useState(false);
  const [update, setUpdate] = useState(false);

  const classes = useStyles();
  const disptach = useDispatch();
  const floatStyle = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    backgroundColor: "#9b5de5",
    color: "white",
  };

  console.log("user--------->", user);

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // useEffect(() => {
  //   disptach(getCapsules());
  // }, []);

  const handleModal = (isUpdate) => {
    setOpen(!open);
    setUpdate(isUpdate || false);
    setUpdateForm(true);
  };

  const clearCurrentId = () => {
    setCurrentId(null);
  };

  const openModal = (e) => setOpen(true);
  const showNav = (e) => {
    setShow(false);
  };

  const onCreate = () => {
    openModal();
    showNav();
    setUpdate(false);
    setUpdateForm(false);
  };

  const onModalClose = () => {
    setOpen(false);
    setShow(true);
  };

  const onClickUpdate = () => {
    setUpdate(true);
  };

  const navbarTog = () => {
    setShow(true);
  };

  return (
    <Box>
      {show ? <Header setLoginUser={setLoginUser} /> : null}

      <Grow in>
        <Container maxWidth="xl">
          <div style={{ margin: "2.4rem" }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={5}
              style={{ direction: "column-reverse" }}
            >
              <Grid item xs={12} sm={7} md={12}>
                <Capsules
                  setCurrentId={setCurrentId}
                  handleModal={handleModal}
                  showNav={showNav}
                  updateForm={updateForm}
                  user={user}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Grow>

      <Fab style={floatStyle} variant="extended" onClick={onCreate}>
        <AddIcon />
        Create
      </Fab>

      <Modal
        open={open}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={modalStyle}
      >
        <Box width={600} height={460} bgcolor="white" p={3} borderRadius={5}>
          <Typography
            variant="h6"
            style={{ color: "gray", textAlign: "center" }}
          >
            {!updateForm ? "Create New" : "Edit"}
          </Typography>
          <Form
            torsum={update}
            clearCurrentId={clearCurrentId}
            currentId={currentId}
            setCurrentId={setCurrentId}
            handleModal={handleModal}
            user={user}
            navbarTog={navbarTog}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
