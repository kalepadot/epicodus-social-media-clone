import React from "react";

function NewsFeedSubmitPost(){
  return (
    <form className="submit-post">
      <div className="post-label">
        <label>
          <input type="text" name="search" placeholder="What's happening?" />
        </label>
      </div>
      <div className="post-button">
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default NewsFeedSubmitPost;