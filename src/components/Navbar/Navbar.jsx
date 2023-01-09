import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../../utils/Constants/Constants";
import { SearchBar } from "../Index/Index";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      sx={{
        position: "sticky",
        background: "#000",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;