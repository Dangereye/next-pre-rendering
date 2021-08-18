import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <Link href={`/posts/${post.id}`} passHref>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { posts: data.slice(0, 5) } };
};
