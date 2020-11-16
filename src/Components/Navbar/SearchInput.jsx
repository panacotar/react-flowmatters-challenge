import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import "./SearchInput.scss";

const SearchInput = () => {
  return (
    <div>
      <TextField
        style={{ margin: "30px" }}
        className="search-input"
        variant="outlined"
        placeholder="Search"
        InputProps={{
          style: {
            fontSize: "1rem",
            height: "30px",
            paddingLeft: "60px",
            color: "#7c91bf",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
