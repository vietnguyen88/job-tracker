import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TablePagination from "@mui/material/TablePagination";
import Collapse from "@mui/material/Collapse";
import ContractTable from "./ContractTable";
import Create from "./Create";

interface Data {
  project_name: string;
  project_id: string;
  start_date: Date;
  end_date: Date;
  created_by: string;
}

function createData(
  project_name: string,
  project_id: string,
  start_date: Date,
  end_date: Date,
  created_by: string
): Data {
  return { project_name, project_id, start_date, end_date, created_by };
}

const rows = [
  createData(
    "Barangaroo",
    "HC7199",
    new Date("2023-01-11"),
    new Date("2023-02-11"),
    "Andy"
  ),
  createData(
    "Pitt St",
    "HC7196",
    new Date("2023-06-11"),
    new Date("2023-08-11"),
    "Adam"
  ),
  createData(
    "Sydney CBD",
    "HC7192",
    new Date("2023-08-11"),
    new Date("2023-10-11"),
    "Ivan"
  ),
  createData(
    "Barangaroo II",
    "HC7191",
    new Date("2023-05-11"),
    new Date("2023-09-11"),
    "Andy"
  ),
  createData(
    "Wollongong1",
    "HC2326",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong2",
    "HC8565",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong3",
    "HC6853",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong5",
    "HC8563",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong4",
    "HC6792",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong",
    "HC5346",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong",
    "HC1755",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong",
    "HC8446",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong",
    "HC1245",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong",
    "HC1342",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
  createData(
    "Wollongong",
    "HC6585",
    new Date("2023-03-11"),
    new Date("2023-06-11"),
    "Andy"
  ),
];

const index = () => {
  const [isEditSelected, setIsEditSelected] = useState(true);

  const handleEdit = () => {
    setIsEditSelected(!isEditSelected);
  };
  return (
    <Box>
      <Stack spacing={2} direction="row">
        <Input
          startAdornment={<SearchIcon />}
          placeholder="Search Head Contract"
        />
        <Button
          variant="contained"
          endIcon={isEditSelected ? "" : <AddIcon />}
          onClick={handleEdit}
        >
          {isEditSelected ? "Show Contracts" : "Create"}
        </Button>
      </Stack>

      <Collapse in={isEditSelected} sx={{ padding: "10px" }}>
        <Create />
      </Collapse>
      <Collapse in={!isEditSelected} sx={{ padding: "10px" }}>
        <ContractTable rows={rows} />
      </Collapse>
    </Box>
  );
};

export default index;
