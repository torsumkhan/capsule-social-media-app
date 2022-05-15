import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Home from "@mui/icons-material/Home";

const SideBar = () => {
  return (
    <Box flex={1} p={2} style={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablepadding="true">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItem>
        <ListItem disablepadding="true">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
