import React from "react";

import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  styled,
  InputBase,
  Badge,
  Avatar,
} from "@material-ui/core";
import Camera from "@material-ui/icons/Camera";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import { format } from "date-fns";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "6px",
  width: "40%",
});

const Icons = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});

const Header = () => {
  return (
    <AppBar style={{ background: "#9b5de5" }} position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <Camera sx={{ display: { xs: "block", sm: "none" } }} />
        </Typography>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
        <Search>
          <InputBase placeholder="search tags..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar style={{ width: 30, height: 30 }} />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
