import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@mui/material/Chip";
import edit from "../../data/Assets/editsvg.svg";
import { tokens } from "../../theme";
import deletebtn from "../../data/Assets/deletebtn.png";
import EditMemberShip from "./edit.jsx";
import AddMemberShip from "./Add.jsx";
const useStyle = makeStyles({
  root: {
    width: "80%",
    overflowY: "auto",
    marginLeft: "30px",
    marginTop: "30px",
  },
  table: {
    minWidth: 650,
  },
  formControl: {
    margin: "10px",
    minWidth: 120,
  },
});

export default function MembershipPlan() {
  const classes = useStyle();
  const [selectedCity, setSelectedCity] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [add, setadd] = useState(false);
  const [rows, setRows] = useState([
    { amount: 24, zipcodes: 25, status: "Active" },
    { amount: 24, zipcodes: 25, status: "Active" },
    { amount: 24, zipcodes: 25, status: "Active" },
    { amount: 24, zipcodes: 25, status: "Active" },
  ]);

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const filteredRows = selectedCity
    ? rows.filter((row) => row.city === selectedCity)
    : rows;

  function editplan() {
    return setIsEdit(!isEdit);
  }
  function Addplan() {
    return setadd(!add);
  }

  return (
    <>
      {isEdit ? (
        <EditMemberShip editplan={editplan} />
      ) : add ? (
        <AddMemberShip Addplan={Addplan} />
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: 3,
              ml: 4,
              mb: 3,
              "& > :not(style)": {
                m: 1,
                width: 950,
                height: 600,
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Paper elevation={5}>
              <Box
                sx={{
                  position: "reletive",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={Addplan}
                  startIcon={
                    <AddIcon
                      style={{ color: "white", fontSize: 30 }}
                      sx={{ ml: -2 }}
                    />
                  }
                  sx={{
                    backgroundColor: "#0073cf",
                    width: 130,
                    height: 40,
                    ml: 100,
                    mt: 3,
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "15px",
                      textTransform: "capitalize",
                      display: "flex",
                      flexWrap: "no-wrap",
                      marginTop: "0px",
                    }}
                  >
                    Add New
                  </div>
                </Button>
              </Box>

              <Divider
                orientation="horizental"
                sx={{
                  fontWeight: "bold",
                  ml: "20px",
                  backgroundColor: "#C8C8C8",
                  width: "95%",
                  mt: 2,
                }}
                flexItem
              ></Divider>
              <FormControl className={classes.formControl}>
                <Box
                  sx={{
                    display: "flex",
                    flexFlow: "row wrap",
                  }}
                >
                  <TextField
                    size="small"
                    id="filled-search"
                    type="search"
                    variant="filled"
                    placeholder="Search...."
                    sx={{ ml: 3, mt: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ height: "100%", width: "30px" }}
                        >
                          <SearchIcon
                            style={{
                              color: "#B0B0B0",
                              fontSize: "20px",
                              margin: "20px 0 0 10px",
                            }}
                          />
                        </InputAdornment>
                      ),
                      style: {
                        color: "#707070",
                        backgroundColor: "white",
                        border: "1px solid #B0B0B0",
                        width: "250px",
                        height: "34px",
                        fontSize: "17px",
                        padding: "0px 14px 20px 0px",
                        borderRadius: "0px",
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#B0B0B0",
                          },
                      },
                    }}
                  />

                  <Typography variant="h5" sx={{ p: 2, ml: 2, mt: 1 }}>
                    Status:
                  </Typography>
                  <Select
                    size="small"
                    labelId="city-select-label"
                    id="outlined-select-city"
                    value={selectedCity}
                    onChange={handleChange}
                    label="ASd"
                    displayEmpty
                    style={{
                      border: "1px solid #B0B0B0",
                      width: "150px",
                      height: "34px",
                      marginTop: "16px",
                      "& .MuiInput-root.Mui-active": {
                        borderColor: "#B0B0B0",
                      },
                    }}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                  </Select>
                  <Typography variant="h5" sx={{ p: 2, ml: 2, mt: 1 }}>
                    Free:
                  </Typography>
                  <Select
                    labelId="city-select-label"
                    id="city-select"
                    value={selectedCity}
                    onChange={handleChange}
                    label="ASd"
                    displayEmpty
                    style={{
                      border: "1px solid #B0B0B0",
                      width: "150px",
                      height: "34px",
                      marginTop: "16px",
                    }}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                  </Select>
                </Box>
              </FormControl>

              <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Amount</b>
                      </TableCell>
                      <TableCell align="left">
                        <b>Zipcodes</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Status</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Action</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.map((row) => (
                      <TableRow key={row.zipcodes}>
                        <TableCell component="th" scope="row">
                          {row.amount}
                        </TableCell>
                        <TableCell align="left">{row.zipcodes}</TableCell>
                        <TableCell align="right">
                          <Chip
                            label="Active"
                            sx={{ backgroundColor: "#0073cf" }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <img
                            src={edit}
                            onClick={editplan}
                            style={{
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
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
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Paper>
          </Box>
        </div>
      )}
      }
    </>
  );
}
