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
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const useStyle = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
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
  const [rows, setRows] = useState([
    { name: "John Doe", age: 25, city: "New York" },
    { name: "Jane Doe", age: 32, city: "London" },
    { name: "Jim Smith", age: 40, city: "Paris" },
  ]);

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const filteredRows = selectedCity
    ? rows.filter((row) => row.city === selectedCity)
    : rows;

  return (
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
          },
        }}
      >
        <Paper elevation={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#362FD9",
            }}
          >
            Add New
          </Button>

          <FormControl className={classes.formControl}>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={selectedCity}
              onChange={handleChange}
              label="ASd"
              displayEmpty
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="London">London</MenuItem>
              <MenuItem value="Paris">Paris</MenuItem>
            </Select>
          </FormControl>
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
}
