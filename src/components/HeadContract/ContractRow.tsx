import React, { FC, useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";

interface Data {
  project_name: string;
  project_id: string;
  start_date: Date;
  end_date: Date;
  created_by: string;
}
interface Props {
  row: Data;
}

const ContractRow: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow
        hover
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {props.row.project_name}
        </TableCell>
        <TableCell>{props.row.project_id}</TableCell>
        <TableCell>
          <Stack spacing={1} direction="row">
            <Button variant="contained">Edit</Button>
            <Button variant="outlined" color="error">
              Delete
            </Button>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Address
              </Typography>
              <Stack direction="row">
                <Typography sx={{ width: "20%" }}>Start:</Typography>
                <Typography>
                  {props.row.start_date.toLocaleString("en-au", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography sx={{ width: "20%" }}>End:</Typography>
                <Typography>
                  {props.row.end_date.toLocaleString("en-au", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography sx={{ width: "20%" }}>Created By:</Typography>
                <Typography>{props.row.created_by}</Typography>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ContractRow;
