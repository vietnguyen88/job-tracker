import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

import HeadContract from "../../components/HeadContract";

const Home = () => {
  const [value, setValue] = useState("1");

  const handleOnChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderColor: "divider", borderBottom: 1 }}>
            <TabList onChange={handleOnChange}>
              <Tab label="Head-Contract" value="1" />
              <Tab label="Sub-Contract" value="2" />
              <Tab label="Invoice" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <HeadContract />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Home;
