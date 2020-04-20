import React from "react";
import PropTypes from "prop-types";

function NewsFeedPost(props){
  return (
    <React.Fragment>
      <img src = {props.photoUrl}></img>
      <h3>{props.name}</h3>
      <p>{props.postText}</p>
    </React.Fragment>

  );
}

NewsFeedPost.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string, 
  postText: PropTypes.string
};

export default NewsFeedPost;
