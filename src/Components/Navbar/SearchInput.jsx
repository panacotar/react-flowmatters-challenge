import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import "./SearchInput.scss";

const SearchInput = () => {
  return (
    <div>
      <TextField
        style={{width: "100%"}}
        className="search-input"
        variant="outlined"
        placeholder="Search"
        InputProps={{
          style: {
            fontSize: "1rem",
            height: "30px",
            color: "#7c91bf",
            width: "100%"
          },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
