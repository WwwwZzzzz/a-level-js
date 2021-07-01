// import React from "react";
// import { connect } from "react-redux";


// const Post = ({ title, text, _id, createdAt, likes, images, owner }) =>

//   <div className="Post">
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </div>

// const Feed = ({ posts = [{
//   "title": null,
//   "text": "aaa",
//   "_id": "5d7031ee5fce672214797913",
//   "createdAt": "1567633902000",
//   "likes": [],
//   "images": [
//     {
//       "text": null,
//       "url": "images/b8f4310d47243625906fd58aec75f394"
//     }
//   ],
//   "owner": {
//     "_id": "5d6fccfc5fce6722147978f2",
//     "login": "Test3",
//     "avatar": null
//   }
// },
// {
//   "title": null,
//   "text": "Test3 post",
//   "_id": "5d6fcd1d5fce6722147978f4",
//   "createdAt": "1567608093000",
//   "likes": [],
//   "images": [
//     {
//       "text": null,
//       "url": "images/84ed434a801708fefe058b7bc4f630e0"
//     }
//   ],
//   "owner": {
//     "_id": "5d6fccfc5fce6722147978f2",
//     "login": "Test3",
//     "avatar": null
//   }
// }] }) => <div className="Feed">
//     {posts.map(post => <Post {...post} />)}
//   </div>

// export const CFeed = connect((state) => ({ posts: state.promise?.feed?.payload }))(Feed);
