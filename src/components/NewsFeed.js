import React from "react";
import NewsFeedSubmitPost from './NewsFeedSubmitPost.js'
import NewsFeedPost from './NewsFeedPost.js'

const masterPostList = [
  {
    name: "Lorem Ipsum",
    photoUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Lorem Ipsum",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD7owQ7sOa7FuufB3VX_-Lzqt_EIEuMB8A8gcHtunNPAECobKR&usqp=CAU",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Lorem Ipsum",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYSGdzhXBos83awknU7iau8xSeJUym3PDJOllAm3zEi0n9mFVD&usqp=CAU",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function NewsFeed(){
  return(
    <React.Fragment>
      <NewsFeedSubmitPost />
      {masterPostList.map((post, index) =>
        <NewsFeedPost photoUrl={post.photoUrl}
          name={post.name}
          postText={post.postText}
          key={index}/>
      )}
    </React.Fragment>
  )
}

export default NewsFeed; 