import React from 'react';

const Search = ({searchQuery, updateSearchQuery}) => {
 return (
    <div>
    search: <input value={searchQuery} onChange={updateSearchQuery} />
  </div>
 )
}

export default Search