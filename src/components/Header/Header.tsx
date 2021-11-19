import React from "react";
import "./Header.pcss";
import { AppBar, Typography } from "@mui/material";
import { Svg } from "../Svg/Svg";
import { ISvgFile } from "../Svg";

const logo = require("../../assets/icons/location.svg") as ISvgFile;

export const Header = () => {
  return (
    <div className={"header"}>
      <AppBar color="transparent" position="static">
        <Typography variant="h6" className={"title"}>
          <section className={"section"}>
            <Svg file={logo} />
          </section>
          News
        </Typography>
      </AppBar>
    </div>
  );
};
