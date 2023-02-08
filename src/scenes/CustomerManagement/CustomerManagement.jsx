import React from "react";
import { Box, Paper, Divider, Typography, Button } from "@mui/material";
import "./CustomerManagement.scss";
import MultipleSelect from "../../components/MultipleSelect.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import edit from "../../data/Assets/editsvg.svg";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function CustomerManagement() {
  return (
    <>
      <Box className="customerList">
        <Box>
          <Paper
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "0px",
              borderBottom: "1px solid lightgray",
              padding: "30px",
            }}
          ></Paper>
          <Paper
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "0px",
              borderBottom: "1px solid lightgray",
              p: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <SearchBar />
              <Typography variant="h6" sx={{ p: 2 }}>
                Status:
              </Typography>
              <MultipleSelect
                title={"All"}
                names={names}
                widthProp="250px"
                marginProp="10px 0px 0px 0px"
              />
            </Box>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "0px",

              p: 5,
            }}
          >
            <Box></Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default CustomerManagement;
