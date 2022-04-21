import "./SearchResultsView.scss";
import React, { useEffect } from "react";

const SearchResultsView = ({ search }) => {
  useEffect(() => {
    console.log(search);
  }, [search]);

  return <div></div>;
};

export default SearchResultsView;
