import React from "react";
import "./Header.pcss";
import { AppBar, Link, Typography } from "@mui/material";
import { Svg } from "../Svg/Svg";
import { ISvgFile } from "../Svg";

const logo = require("../../assets/icons/location.svg") as ISvgFile;

export const Header = () => {
  return (
    <div className={"header"}>
      <AppBar color="transparent" position="static">
        <Typography variant="h6" className={"title"} paragraph={true}>
          <Link href="#" color="inherit" variant="inherit" underline="none">
            <div className={"section"}>
              <Svg file={logo} />
            </div>
            <span>оdaerjay</span>
          </Link>
        </Typography>
        <Typography variant="subtitle1" className={"title"} paragraph={true}>
          <Link href="#" color="inherit" variant="inherit" underline="hover">
            иллюстрации
          </Link>
          <Link href="#" color="inherit" variant="inherit" underline="hover">
            кофейная карта
          </Link>
        </Typography>
      </AppBar>
    </div>
  );
};
