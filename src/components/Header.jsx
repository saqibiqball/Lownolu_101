import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AppBar from "@mui/material/AppBar";
import Divider from '@mui/material/Divider';
const Header = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <AppBar position="relative" sx={{backgroundColor:"white", height:"45px", p:"10px 0 0 10px"}}>
        <Typography
          variant="h5"
          color={colors.grey[700]}
          sx={{fontWeight:"bold"}}
        >
          {title}
        </Typography>
      </AppBar>
    </>
  );
};

export default Header;
