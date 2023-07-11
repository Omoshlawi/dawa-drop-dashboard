import React from "react";
import Box from "@mui/material/Box";
import DrawerHeader from "./DrawerHeader";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Content = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <StyledDrawerHeader />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper
      </Typography>
    </Box>
  );
};

export default Content;
