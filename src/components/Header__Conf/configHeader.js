import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Cart } from "../../context/context";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import "./configHeader.css";

const ConfigurationHeader = (props) => {
  const { stepName, stepNumber } = props;
  const { popover, setPopover } = useContext(Cart);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setPopover(event.currentTarget);
  };

  const handleClose = () => {
    setPopover(null);
  };
  const handleGoHome = () => {
    setPopover(null);
    navigate("/");
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  const open = Boolean(popover);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#000000", top: "0" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleBackClick}
              style={{ cursor: "pointer" }}
            >
              <KeyboardBackspaceIcon
                sx={{
                  fontSize: 32,
                  "@media screen and (max-width:768px)": { fontSize: 20 },
                }}
              />
            </IconButton>
            <Typography
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                marginTop: "5px",
                fontSize: 18,
                fontWeight: 300,
                "@media screen and (max-width:768px)": { fontSize: 14 },
              }}
            >
              {stepName} <span className="step-number">{stepNumber}</span>
            </Typography>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                "@media screen and (max-width:768px)": {
                  padding: 0,
                },
              }}
            >
              <MoreIcon
                sx={{
                  color: "#ffffff",
                  "@media screen and (max-width:768px)": {
                    fontSize: 20,
                  },
                }}
              />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={popover}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  "@media screen and (max-width:768px)": {
                    fontSize: 14,
                  },
                }}
              >
                Discard
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  "@media screen and (max-width:768px)": {
                    fontSize: 14,
                  },
                }}
              >
                Save Changes
              </MenuItem>
              <MenuItem
                onClick={handleGoHome}
                sx={{
                  "@media screen and (max-width:768px)": {
                    fontSize: 14,
                  },
                }}
              >
                Home
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default ConfigurationHeader;
