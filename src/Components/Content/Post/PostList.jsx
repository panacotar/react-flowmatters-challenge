import React from "react";

import "./PostList.scss";
import postsData from "../../../data/posts.json";
import Post from "./Post";
import CardPost from "./CardPost";
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien
//           diam, suscipit et lacus.

// "img/avatar-xsm.png"
/////
// "img/card-img.png"
//Cras malesuada nulla at urna elementum laoreet. Donec volutpat convallis tellus vitae ornare.

//Sed pulvinar consequat mauris nec aliquam. Sed eget condimentum justo, ut consectetur neque. Vestibulum pharetra sagittis dui, eget sodales elit tincidunt mollis. Duis non nisl.

const PostList = () => {
  const currentUserAvatar = "img/avatar-xsm.png";
  return (
    <div className="Post-list">
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
      {/* <Post
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien diam, suscipit et lacus."
        currentUser={currentUserAvatar}
        likes={0}
      >
        <CardPost
          image="img/card-img.png"
          title="Cras malesuada nulla at urna elementum laoreet. Donec volutpat convallis tellus vitae ornare."
          description="Sed pulvinar consequat mauris nec aliquam. Sed eget condimentum justo, ut consectetur neque. Vestibulum pharetra sagittis dui, eget sodales elit tincidunt mollis. Duis non nisl."
          link="PERSPECTIVE.FM"
        />
      </Post> */}
    </div>
  );
};

export default PostList;
