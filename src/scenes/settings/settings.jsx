import "./table.scss";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import edit from "../../data/Assets/editsvg.svg";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <table className="responsive-table responsive-table-input-matrix">
      <p style={{ padding: "5px" }}></p>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <p style={{ padding: "10px" }}></p>
      <tr>
        <th>Info Type</th>
        <th>Site Details</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td data-th="Role">User Email</td>
        <td data-th="Role">lawn@yopmail.com</td>
        <td data-th="Role">
          <Button>
            {" "}
            <img
              src={edit}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </Button>
        </td>
      </tr>
      <tr>
        <td data-th="Role">Site Title</td>
        <td data-th="Role">Lawnolu</td>
        <td data-th="Role">
        <Button>
            {" "}
            <img
              src={edit}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </Button>
        </td>
      </tr>
      <tr>
        <td data-th="Role">Site Email</td>
        <td data-th="Role">Lawnolu@gmail.com</td>
        <td data-th="Role">
        <Button>
            {" "}
            <img
              src={edit}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </Button>
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
  );
};

export default Settings;
