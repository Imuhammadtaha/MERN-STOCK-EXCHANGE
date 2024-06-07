import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <>
      <div className="search-form p-2 d-flex">
        <div className="search-btn">
          <IoMdSearch size={25} color="rgb(0, 181, 151)" />
        </div>
        <form>
          <input
            type="text"
            className="ms-2"
            placeholder="Search"
            aria-label="Search"
            style={{ backgroundColor: "rgb(1, 16, 34)" }}
          />
        </form>
      </div>
    </>
  );
};

export default SearchInput;
