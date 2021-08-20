import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <h2>List of Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <Link href={`/posts/${post.id}`} passHref>
            <a>
              <h3>
                {post.id}, {post.title}
              </h3>
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
  return { props: { posts: data } };
};
