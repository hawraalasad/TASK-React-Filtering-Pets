import React, { useState } from "react";
import PetsList from "./PetsList";
import PetItem from "./PetItem";
import petsData from "../petsData";

const Search = ({ setQuery }) => {
  return (
    <input
      type="search"
      className="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default Search;
