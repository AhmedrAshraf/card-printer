import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#333533 ", }}>
      <Toolbar style={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontFamily: "NokaBold" }}
        >
          Card Printer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
