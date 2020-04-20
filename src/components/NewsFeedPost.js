import React from "react";
import PropTypes from "prop-types";

function NewsFeedPost(props){
  return (
    <React.Fragment>
      <div className="post-photo">
        <img src = {props.photoUrl}></img>
      </div>
      <div className="post-text">
        <h3>{props.name}</h3>
        <p>{props.postText}</p>
      </div>
    </React.Fragment>
  );
}

NewsFeedPost.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string, 
  postText: PropTypes.string
};

export default NewsFeedPost;
