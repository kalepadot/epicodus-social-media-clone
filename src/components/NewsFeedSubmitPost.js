import React from "react";

function NewsFeedSubmitPost(){
  return (
    <form>
      <label>
        Post
        <input type="text" name="search" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewsFeedSubmitPost;