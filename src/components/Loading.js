import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import classes from "./Loading.module.css";
import spaceXImg from "../assets/SpaceX-Logo.png";

export default function Loading() {
  return (
    <Box className={classes.loading}>
      <CircularProgress className={classes.spiner} style={{ width: "50px" }} />
      <h3 className={classes.text}>Loading . . . </h3>
    </Box>
  );
}
