import React from 'react';

function SearchBar(){
  return(
    <form>
      <label>
        Search
        <input type="text" name="search" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default SearchBar;