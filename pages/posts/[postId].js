const Post = ({ post }) => {
  return (
    <div className="container">
      <h2>
        {post.id}, {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();

  //   //   const paths = data.map((post) => {
  //   //     return { params: { postId: `${post.id}` } };
  //   //   });

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
      { params: { postId: "5" } },
    ],
    // paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page for /posts/${params.postId}`);
  return { props: { post: data } };
};
