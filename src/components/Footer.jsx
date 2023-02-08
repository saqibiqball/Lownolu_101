import React from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AppBar from "@mui/material/AppBar";
function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <AppBar position="relative" sx={{backgroundColor:"white"}}>
    <Typography
      variant="h4"
      color={colors.grey[700]}
      sx={{ m: "0 0 5px 0", p:"5px 0 5px 14px" }}
    >
      2020 @ Lawnolu
    </Typography>
  </AppBar>
  )
}

export default Footer