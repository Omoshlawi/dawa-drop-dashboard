import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import { Container, Stack } from "@mui/material";
import Content from "../../components/dashboard/Content";

const DashBoard = () => {
  return (
    <Stack
      sx={{ display: "flex", flex: 1, m: 0, p: 0 }}
      direction="row"
      spacing={0.5}
    >
      <Container
        sx={{
          display: {
            sm: "none",
            xs: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          border: 1,
          flex: {
            md: 1,
          },
        }}
      >
        <SideBar />
      </Container>
      <Container
        sx={{
          border: 1,
          flex: {
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 6,
          },
        }}
      >
        <Content />
      </Container>
    </Stack>
  );
};

export default DashBoard;
