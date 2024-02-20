import { Notifications, GridOn, Help } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, styled, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#000000",
});

const Logo = styled("img")({
  height: "34px",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 20,
  color: "#8894A0",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to="/">
          <Logo src="assets/logo.png" alt="website-logo" />
        </Link>
        <Icons>
          <Badge>
            <GridOn />
          </Badge>
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="error"
            variant="dot"
          >
            <Notifications />
          </Badge>
          <Badge>
            <Help />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="assets/admin-logo.png" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
