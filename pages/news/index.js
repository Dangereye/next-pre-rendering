const NewsArticleList = ({ articles }) => {
  return (
    <div className="container">
      <h2>List of News Articles</h2>
      {articles.map((article) => (
        <div className="card" key={article.id}>
          <h3>
            {article.id}, {article.title} | {article.category}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default NewsArticleList;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();
  return {
    props: { articles: data },
  };
};
