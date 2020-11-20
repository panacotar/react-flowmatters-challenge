import React from "react";

import postsData from "../../../data/posts.json";
import Post from "./Post";
import CardPost from "./CardPost";
import Slider from "../../Common/Slider/Slider";

const PostList = () => {
  const currentUserAvatar = "img/avatar-xsm.png";
  return (
    <div className="Post-list">
    <Post key={Math.random()}
      description="
Morbi quis bibendum eros. Nullam eu sapien ut augue viverra elementum vitae porta tellus."
      currentUser={currentUserAvatar}
      likes={6}
      >
      <Slider />

    </Post>
      {postsData.map((post) => {
        return (
          <Post
            key={post.id}
            description={post.description}
            currentUser={currentUserAvatar}
            likes={post.likes}
          >
            <CardPost
              image={post.card.image}
              title={post.card.title}
              description={post.card.description}
              link={post.card.link}
            />
          </Post>
        );
      })}
    </div>
  );
};

export default PostList;
