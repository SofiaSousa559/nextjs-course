import React from "react";
import AllPosts from "./all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const AllPostsPage = (props) => {
  /*const DUMMY_POSTS = [
    {
      title: "Getting started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt: "NextJS is a React framework for prodution",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs",
    },
  ];*/
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all my posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { posts: allPosts },
  };
}
