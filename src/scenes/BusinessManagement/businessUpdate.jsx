import React from "react";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./businessUpdate.scss";
const BusinessUpdate = () => {
  return (
    <>
      <Box className="UpdateBox">
        <Grid container spacing={2} p={3}>
          <Grid item xs={6}>
            <label for="ufname">First Name:</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="ufname"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label for="ulname">Last Name:</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="ulname"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label for="uname">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="uemail"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label for="psw">Phone:</label>
            <input
              type="phone"
              placeholder="Enter Phone"
              name="uphone"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label for="uname">City:</label>
            <input type="text" placeholder="Enter City" name="ucity" required />
          </Grid>
          <Grid item xs={6}>
            <label for="psw">State</label>
            <select
              id="select"
              placeholder="Select Status"
              name="ucompanyname"
              required
            ></select>
          </Grid>
          <Grid item xs={6}>
            <label for="uname">Zip Code:</label>
            <input
              type="number"
              placeholder="Enter City"
              name="ucity"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label for="Enter Company Name">Company Name:</label>
            <input
              type="text"
              placeholder="Enter Company Name"
              name="ucompanyname"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label for="uname">Approve:</label>
            <select
              id="select"
              placeholder="Select Status"
              name="ucompanyname"
              required
            ></select>
          </Grid>
          <Grid item xs={6}>
            <label for="Enter Company Name">Status:</label>
            <select
              id="select"
              placeholder="Select Status"
              name="ucompanyname"
              required
            ></select>
          </Grid>
          <Grid item xs={6}>
            <label for="uname">Job Service:</label>
            <select
              id="select"
              placeholder="Select Job service"
              name="ujobservice"
              required
            ></select>
          </Grid>
          <Grid item xs={6}>
            <label for="Enter Company Name">Short Description:</label>
            <textarea
              id="textarea"
              placeholder="Enter Description"
              name="udescription"
              required
            ></textarea>
          </Grid>
          <Grid item xs={6}>
            <label for="Enter Company Name">Image</label>
            <input type="file" />
          </Grid>
        </Grid>
        <hr style={{}}></hr>
        <Grid container spacing={2} p={3}>
          <Grid item xs={6}>
            <button id="update" >Update</button>
            <button id="cancel">Cancel</button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BusinessUpdate;
