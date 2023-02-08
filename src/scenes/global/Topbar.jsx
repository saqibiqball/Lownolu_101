import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, IconButton, useTheme, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  ProSidebar,
  Menu as ProMenu,
  MenuItem as ProMnueItem,
  SubMenu,
} from "react-pro-sidebar";
const StyledMenu = styled((props) => (
  <Menu
    elevation={6}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 2,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(-2),
    minWidth: 380,
    backgroundColor: "rgb(249, 250, 252)",
    color:
      theme.palette.mode === "light"
        ? "rgb(13, 13, 14)"
        : theme.palette.grey[600],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(255, 251, 251, 0.05) 0px 0px 0px 1px, rgba(255, 255, 255, 0.1) 0px 10px 15px -3px, rgba(255, 255, 255, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      width: "100%",
      padding: "0 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  function stringAvatar(name) {
    return {
      sx: {
        color: colors.greenAccent[600],
        fontSize: "20px",
        fontWieght: "bold",
        mt: "10px",
        width: 30,
        height: 30,
        borderRadius: "2px",
        cursor: "pointer",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ p: "0.5% 1% 0.5% 1%" }}
      >
        <Box display="flex" borderRadius="3px">
          <img
            alt="app-logo"
            width="190px"
            height="50px"
            src={`../../assets/lawnoluLogo.png`}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Box display="flex">
          <Typography
            variant="h6"
            sx={{ mr: "1px", mt: "20px", color: `${colors.grey[300]}` }}
          >
            Hi, Supper Admin
          </Typography>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            sx={{}}
          >
            <Avatar
              variant="square"
              {...stringAvatar("Supper Admin")}
              onClick={() => {}}
            />
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Box
              sx={{
                m: 0,
                bgcolor: `${colors.greenAccent[600]}`,
                p: 4,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Avatar
                variant="square"
                {...stringAvatar("Supper Admin")}
                sx={{
                  fontSize: "40px",
                  height: "50px",
                  width: "50px",
                  bgcolor: `${colors.greenAccent[300]}`,
                  color: `${colors.greenAccent[600]}`,
                  borderRadius: "1px",
                  p: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{ mt: "4%", ml: "3%", color: "ghostwhite" }}
              >
                Supper Admin
              </Typography>
            </Box>
            <Box sx={{ backgroundColor: "ghostwhite" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <PermContactCalendarIcon />{" "}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      
                    }}
                  >
                    <Typography variant="h6">My profile</Typography>
                    <Typography variant="p">
                      Account Settings and more
                    </Typography>
                  </Box>{" "}
                  <KeyboardArrowRightIcon />
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <AccountCircleIcon />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Typography variant="h6">Change Password</Typography>
                    <Typography variant="p ">
                      Change Your Account Password
                    </Typography>
                  </Box>
                  <KeyboardArrowRightIcon />
                </Button>
              </Box>
              {/* <MenuItem sx={{ p: 4 }} onClick={handleClose} disableRipple>
                Edit
              </MenuItem> */}
              {/* <Box
                sx={{
                  "& .pro-sidebar-inner": {
                    backgroundColor: "transparent !important",
                    marginRight:"0px"
                  },
                  "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                  },
                  "& .pro-inner-item": {
                    padding: "5px 0px 5px 0px !important",
                  },
                }}
              >
                <ProSidebar>
                  <ProMenu>
                    <SubMenu
                      title={"My Profile"}
                      icon={<PermContactCalendarIcon />}
                    ></SubMenu>
                    <SubMenu
                      title={"Change Password"}
                      icon={<AccountBoxIcon />}
                    ></SubMenu>
                  </ProMenu>
                </ProSidebar>
              </Box> */}
              <Box sx={{ p: 4 }}>
                <Button sx={{ color: "blue", backgroundColor: "lightskyblue" }}>
                  Sign Out
                </Button>
              </Box>
            </Box>
          </StyledMenu>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
