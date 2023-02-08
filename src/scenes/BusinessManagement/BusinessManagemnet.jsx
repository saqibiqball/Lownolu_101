import React, { useState } from "react";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import MultipleSelect from "../../components/MultipleSelect.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import "./BusinessManagemnet.scss";
import edit from "../../data/Assets/editsvg.svg";
import { tokens } from "../../theme";
import deletebtn from "../../data/Assets/deletebtn.png";
import lapkeyb from "../../data/Assets/lapkeyb.png";
import Chip from "@mui/material/Chip";
import BusinessUpdate from "./businessUpdate";
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
function BusinessManagement() {
  const [isEdit, setIsEdit] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <>
      {isEdit ? (
        <BusinessUpdate />
      ) : (
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
                  widthProp="100px"
                  marginProp="10px 0px 0px 0px"
                />
                <Typography variant="h6" sx={{ p: 2 }}>
                  Approve:
                </Typography>
                <MultipleSelect
                  title={"All"}
                  names={names}
                  widthProp="100px"
                  marginProp="10px 0px 0px 0px"
                />
              </Box>
            </Paper>
            <Paper
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "0px",
                p: 1,
              }}
            >
              <table className="resp-b-table resp-b-table-input-matrix">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td data-th="Role">
                    {" "}
                    <img
                      src={lapkeyb}
                      style={{
                        width: "50px",
                        height: "50px",
                        cursor: "pointer",
                      }}
                    />
                  </td>
                  <td data-th="Role">Wanda maximum</td>
                  <td data-th="Role">wanda@yopmail.com</td>
                  <td data-th="Role">87697654..</td>
                  <td data-th="Role">
                    <Chip label="Active" color="primary" />
                  </td>
                  <td data-th="Role">
                    {" "}
                    <img
                      src={edit}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setIsEdit(true);
                      }}
                    />{" "}
                    <img
                      src={deletebtn}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <p style={{ padding: "22px", paddingTop: "70px" }}>
                    <select
                      style={{
                        width: "4em",
                        height: "2em",
                        padding: "5px",
                        borderStyle: "none",
                        textAlign: "center",
                        backgroundColor: `${colors.primary[100]}`,
                        marginRight: "5px",
                      }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    Showing 1 - 3 of 3
                  </p>
                </tr>
              </table>
            </Paper>
          </Box>
        </Box>
      )}
    </>
  );
}

export default BusinessManagement;
