import React from "react";
import { Fragment } from "react";
import FeaturePosts from "../components/home-page/feature-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>Sofia's Blog</title>
        <meta name="description" content="I post about several things" />
      </Head>
      <Hero />
      <FeaturePosts posts={posts} />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  // const featuredPosts = [
  //   {
  //     title: "Getting started with NextJS",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "NextJS is a React framework for prodution",
  //     date: "2022-02-10",
  //     slug: "getting-started-with-nextjs",
  //   },
  // ];

  const featuredPosts = await getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
    revalidate: 30,
  };
}
