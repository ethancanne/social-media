import "./Home.scss";
import React, { useState } from "react";
import { Page, pages } from "../Page";
import axios from "axios";
import Posts from "../../views/home/posts/Posts";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchResultsView from "../../views/searchResultsView/SearchResultsView";

/**
 * Renders the Dashboard of the application.
 * @author  Ethan Cannelongo
 * @date   2/13/2022
 */
const Home = props => {
  //Save search term in state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("Posts");

  const submitSearch = async e => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <Page currentPage={pages.HOME}>
      <div className='home-page'>
        <form className='search-bar' onSubmit={submitSearch}>
          <IconButton type='submit' sx={{ p: "10px" }} aria-label='search'>
            <SearchIcon />
          </IconButton>
          <InputBase
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder='Search for users or posts'
            sx={{ width: "80%" }}
            fullWidth
          />

          <Select
            label='Search Type'
            sx={{ width: "20%" }}
            onChange={e => setSearchType(e.target.value)}
            value={searchType}
            variant='standard'>
            <MenuItem value={"Posts"}>Users</MenuItem>
            <MenuItem value={"Users"}>Posts</MenuItem>
          </Select>
        </form>
        {searchTerm === "" ? (
          <>
            <div className='home-posts-container'>
              <Posts />
            </div>
          </>
        ) : (
          <SearchResultsView search={searchTerm} type={searchType} />
        )}
      </div>
    </Page>
  );
};

export default Home;
