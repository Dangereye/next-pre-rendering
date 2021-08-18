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
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
      { params: { postId: "5" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return { props: { post: data } };
};