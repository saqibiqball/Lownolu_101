import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "white",
      color: "gray",
    },
  },
};
export default function MultipleSelect({
  title,
  names,
  widthProp,
  marginProp,
}) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "gray" }}>
          {title}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          title={title}
          // input={<OutlinedInput label={title} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{
            borderRadius: "0px",
            border: "1px solid gray",
            color: "black",
            height: "40px",
            width: widthProp,
            margin: marginProp,
            "& .MuiSelect-icon": {
              color: "black",
            },
          }}
        >
          {names?.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "gray",
                  },
                }}
                checked={personName.indexOf(name) > -1}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
