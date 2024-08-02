import React from 'react';

import css from './SearchBox.module.css';
const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        name="filter"
      />
    </div>
  );
};

export default SearchBox;
