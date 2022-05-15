import React, { useEffect, useState } from "react";
import Header from "./components/UIComponents/Header";
import SideBar from "./components/UIComponents/SideBar";
import Form from "./components/Form/Form";
import Capsules from "./components/Capsules/Capsules";
import useStyles from "./styles";
//import components from material UI
import {
  Container,
  Grow,
  Grid,
  Box,
  Modal,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getCapsules } from "./actions/capsules";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [open, setOpen] = useState(false);
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

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    disptach(getCapsules());
  }, []);
  return (
    <Box>
      <Header />

      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/* <Grid item xs={12} sm={4}>
              <Form />
            </Grid> */}
            <Grid item xs={12} sm={7}>
              <Capsules />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Fab style={floatStyle} variant="extended" onClick={(e) => setOpen(true)}>
        <AddIcon />
        Create
      </Fab>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={modalStyle}
      >
        <Box width={600} height={420} bgcolor="white" p={3} borderRadius={5}>
          <Typography
            variant="h6"
            style={{ color: "gray", textAlign: "center" }}
          >
            Create New
          </Typography>
          <Form />
        </Box>
        {/* <Form /> */}
      </Modal>
    </Box>
  );
};

export default App;
