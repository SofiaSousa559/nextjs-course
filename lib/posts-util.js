import fs from "fs";
import path from "path";
import matter from "gray-matter";

//const postsDirectory = path.join(process.cwd(), "posts"); // Pasta dos ficheiros MD
//const postsDirectory = `${process.cwd()}/posts`; // resolvido com

export async function getPostsFiles() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const files = await fs.readdirSync(postsDirectory);
  return files;
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove a extensão do slug, caso tenha
  const postsDirectory = path.join(process.cwd(), "posts"); // Pasta dos ficheiros MD
  const filePath = path.join(postsDirectory, `${postSlug}.md`); // caminho de um dos ficheiros

  const fileContent = fs.readFileSync(filePath); //, "utf-8"); // ler o conteudo de um ficheiro
  // No fileContent temos o conteudo todo do ficheiro e precisamos agora de separar o conteudo do metadata atraves do matter:
  const { data, content } = matter(fileContent); // passamos uma string e ele devolve um objecto com duas propriedades: data (metadata) e content (o conteudo markdown text as string), por isso podemos fazer logo a destreturação dele

  const postData = {
    slug: postSlug,
    ...data, // destructuring the data
    content: content,
  };

  return postData;
}

// All Posts:
export async function getAllPosts() {
  /*const postsDirectory = path.join(process.cwd(), "posts");
  const postFiles = fs.readdirSync(postsDirectory); // lê o conteudo inteiro de um diretorio (nao apenas de um ficheiro), no fundo lê todos os ficheiros. (retorna um array de strings, que serão os nomes dos ficheiros (com a extensão))
  */

  const postFiles = await getPostsFiles();
  // Agora vamos percorrer cada um dos ficheiros e ler o seu conteudo atraves do getPostData e guardar os dados num array
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

// Featured Posts:
export async function getFeaturedPosts() {
  const allPosts = await getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
