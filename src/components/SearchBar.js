import React from 'react';

function SearchBar(){
  return(
    <form>
      <label>
        <input type="text" name="search" placeholder="Search" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default SearchBar;