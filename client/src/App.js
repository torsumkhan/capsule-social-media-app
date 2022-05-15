import React from "react";
import Header from "./components/UIComponents/Header";
import SideBar from "./components/UIComponents/SideBar";
import Capsules from "./components/Capsules/Capsules";
import useStyles from "./styles";
//import components from material UI
import { Container, Grow, Grid, Box } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-bewteen"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <SideBar />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Capsules />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Box>
  );
};

export default App;
