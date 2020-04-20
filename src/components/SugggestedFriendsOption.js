import React from "react";
import PropTypes from "prop-types";

function SuggestedFriendsOption(props){
  return (
    <React.Fragment>
      <img src= {props.photoUrl}></img>
      <h3>{props.name}</h3>
      <button type="button">Add Friend</button>
    </React.Fragment> 
  );
}

SuggestedFriendsOption.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string,
}

export default SuggestedFriendsOption;