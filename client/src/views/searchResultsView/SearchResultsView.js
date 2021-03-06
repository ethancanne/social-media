import "./SearchResultsView.scss";
import React, { useEffect, useState } from "react";
import UserListView from "../userListView/UserListView";
import Posts from "../home/posts/Posts";
import routes from "../../../routes";
import axios from "axios";

const SearchResultsView = ({ searchTerm, searchType }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    if (searchType === "posts") {
      const res = await axios.get("/api/search/posts" + "/" + searchTerm);
      setPosts(res.data.posts);
    } else if (searchType === "users") {
      const res = await axios.get("/api/search/users" + "/" + searchTerm);
      console.log(res.data.users);
      setUsers(res.data.users);
    }
  }, [searchTerm, searchType]);

  const getCorrectSearchResults = () => {
    if (searchType === "posts") {
      return <Posts title={"Search for: " + searchTerm} posts={posts} />;
    } else if (searchType === "users") {
      return <UserListView users={users} />;
    }
  };

  return (
    <div className='search-results-view-container'>
      {getCorrectSearchResults()}
    </div>
  );
};

export default SearchResultsView;
