import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const SideBar = () => {
  const theme = useTheme();
  return (
    <Stack
      spacing={1}
      display="flex"
      flex={1}
      sx={{ p: 0, m: 0, width: "100%", backgroundColor: "red" }}
    >
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Main 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Sub1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Main 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Sub 2</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default SideBar;
