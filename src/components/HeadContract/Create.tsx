import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { Stack } from "@mui/system";
import { Button, FilledInput, InputAdornment } from "@mui/material";
import "dayjs/locale/en-au";
import AbcIcon from "@mui/icons-material/Abc";

const Create = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <div>
      <FormControl>
        <Stack spacing={2}>
          <TextField
            id="project-name"
            label="Project Name"
            variant="outlined"
          />
          <TextField
            id="project-id"
            label="Project ID"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">HC-</InputAdornment>
              ),
            }}
          />

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-au"
          >
            <DatePicker
              label="Start Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-au"
          >
            <DatePicker
              label="End Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Save</Button>
            <Button variant="contained" color="error">
              Close
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </div>
  );
};

export default Create;
