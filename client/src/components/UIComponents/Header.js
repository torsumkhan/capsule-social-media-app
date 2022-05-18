import React, { useState } from "react";

import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Camera from "@material-ui/icons/Camera";
import LogoutIcon from "@mui/icons-material/Logout";
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

const Header = ({ setLoginUser }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar style={{ background: "#9b5de5", zIndex: 3000 }} position="sticky">
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
          <Badge>
            <LogoutIcon onClick={() => setLoginUser({})} />
          </Badge>
          <Badge>
            <Avatar
              style={{ width: 36, height: 36 }}
              src={require("../../images/86.jpg")}
              onClick={(e) => setOpen(true)}
            />
          </Badge>
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={() => {}}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
