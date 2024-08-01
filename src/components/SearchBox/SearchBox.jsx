import React from 'react';

const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
