import React from "react";
import PostsGrid from "../posts/posts-grid";
import classes from "./feature-posts.module.css";

const FeaturePosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Feature Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturePosts;
