import React from 'react';
import SuggestedFriendsOption from './SugggestedFriendsOption.js';

const suggestedFriendsList = [
  {
    name: "Lorem Ipsum",
    photoUrl: "https://picsum.photos/200"
  },
  {
    name: "Lorem Ipsum",
    photoUrl: "https://picsum.photos/200"
  },
  {
    name: "Lorem Ipsum",
    photoUrl: "https://picsum.photos/200"
  }
];

function SuggestedFriends() {
  return(
    <React.Fragment>
      {suggestedFriendsList.map((friend, index) =>
        <div className="suggested-friend">
          <SuggestedFriendsOption photoUrl={friend.photoUrl}
            name={friend.name}
            key={index}/>
        </div>
      )}
    </React.Fragment>
  )
}

export default SuggestedFriends;