import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const SideBar = () => {
  const theme = useTheme();
  return (
    <Stack
      spacing={1}
      display="flex"
      flex={1}
      sx={{ p: 0, m: 0, width: "100%", backgroundColor: "red" }}
    >
     
    </Stack>
  );
};

export default SideBar;
