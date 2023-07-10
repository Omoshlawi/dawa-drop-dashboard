import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import { Container, Stack } from "@mui/material";
import Content from "../../components/dashboard/Content";

const DashBoard = () => {
  return (
    <Stack
      sx={{ display: "flex", flex: 1, direction: "row", background: "red" }}
      spacing={1}
    >
      <Container sx={{ flex: 1, border: 1 }}>
        {/* <SideBar /> */}
        Hellow
      </Container>
      <Container sx={{ flex: 2, border: 1 }}>
        {/* <Content /> */}
        World
      </Container>
    </Stack>
  );
};

export default DashBoard;
