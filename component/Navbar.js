import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Navbar() {
  return (
    <>
      <div className="outsidebar">
        <div className="navbar">
          <NavLink exact to="/">
            <img
              src="https://mintable.app/static/media/logo.448e3bcd.svg"
              alt="img"
              id="logo"
            />
          </NavLink>
          <div className="dropdownbtn">
            All Categories
            <ArrowDropDownIcon  fontSize="large" />
            
          </div>
          <div className="outsideinput">
            <SearchIcon className="search_icon" />
            <input
              type="text"
              placeholder="Search for NFTs.."
              className="search_NFT"
            />
          </div>
          <NavLink exact to="/browse">
            Browse
          </NavLink>
          <NavLink exact to="/mint">
            Mint an item
          </NavLink>
          <NavLink exact to="/explore">
            Explore
          </NavLink>
          <NavLink exact to="/explore">
          <i className="fab fa-ethereum"></i>
            <span> ETH </span>
          </NavLink>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" className="signup">
              Login
            </Button>
            <Button variant="contained" className="signup">
              Sign Up
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
