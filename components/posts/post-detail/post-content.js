import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

// const DUMMY_POST = {
//   title: "Getting started with NextJS",
//   image: "getting-started-nextjs.png",
//   excerpt: "NextJS is a React framework for prodution",
//   date: "2022-02-10",
//   slug: "getting-started-with-nextjs",
//   content: "# This is a first post",
// };

// const PostContent = () => {
//   const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

//   return (
//     <article className={classes.content}>
//       <PostHeader title={DUMMY_POST.title} image={imagePath} />
//       <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
//     </article>
//   );
// };

const PostContent = (props) => {
  const { title, content, image, slug } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    //   p(paragraph) {
    //     const { node } = paragraph;

    //     if (node.children[0].tagName === "img") {
    //       const image = node.children[0];

    //       return (
    //         <div className={classes.image}>
    //           <Image
    //             src={`/images/posts/${slug}/${image.url}`}
    //             alt={image.alt}
    //             width={600}
    //             height={300}
    //           />
    //         </div>
    //       );
    //     }

    //     return <p>{paragraph.children}</p>;
    //   },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
