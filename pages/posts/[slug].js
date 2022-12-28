import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const PostDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
};

export default PostDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params; // Conseguimos o valor do URL

  const postData = getPostData(slug); // ler os dados do ficheiro

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFileNames = await getPostsFiles(); // todas as paginas, que serão o nosso slug

  // retirar a extensão das paginas
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
