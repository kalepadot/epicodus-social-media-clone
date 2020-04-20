import React from "react";
import NewsFeedSubmitPost from './NewsFeedSubmitPost.js'
import NewsFeedPost from './NewsFeedPost.js'

const masterPostList = [
  {
    name: "Lorem Ipsum",
    photoUrl: "https://picsum.photos/200",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Lorem Ipsum",
    photoUrl: "https://picsum.photos/200",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Lorem Ipsum",
    photoUrl: "https://picsum.photos/200",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function NewsFeed(){
  return(
    <React.Fragment>
      <NewsFeedSubmitPost />
      {masterPostList.map((post, index) =>
      <div className="newsfeed-post">
        <NewsFeedPost photoUrl={post.photoUrl}
          name={post.name}
          postText={post.postText}
          key={index}/>
        </div>
      )}
    </React.Fragment>
  )
}

export default NewsFeed; 