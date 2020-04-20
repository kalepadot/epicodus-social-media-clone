import React from "react";
import PropTypes from "prop-types";

function SuggestedFriendsOption(props){
  return (
    <React.Fragment>
      <div className="friend-photo">
        <img src= {props.photoUrl}></img>
      </div>
      <div className="friend-name">
        <h3>{props.name}</h3>
      </div>
      <div class="friend-button">
        <button type="button">Add Friend</button>
      </div>
      <hr/>
    </React.Fragment> 
  );
}

SuggestedFriendsOption.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string,
}

export default SuggestedFriendsOption;