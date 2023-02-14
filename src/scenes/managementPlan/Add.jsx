import React, { useState } from "react";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";

export default function AddMemberShip(prop) {
  return (
    <>
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
              display: "flex",
              flexFlow: "row wrap",
            }}
          >
            <Typography variant="h5" sx={{ p: 2, ml: 2, mt: 1 }}>
              Amount:
            </Typography>
            <TextField
              size="small"
              id="filled-search"
              type="search"
              variant="filled"
              placeholder="Amount.."
              sx={{ ml: 3, mt: 2 }}
              InputProps={{
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
              Zipcodes:
            </Typography>
            <TextField
              size="small"
              id="filled-search"
              type="search"
              variant="filled"
              placeholder="Zipcodes"
              sx={{ ml: 3, mt: 2 }}
              InputProps={{
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
          </Box>
          <Button
            variant="contained"
            size="large"
            onClick={prop.Addplan}
            sx={{
              backgroundColor: "#0073cf",
              width: 80,
              height: 30,
              ml: 50,
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
              ADD
            </div>
          </Button>
        </Paper>
      </Box>
    </>
  );
}
