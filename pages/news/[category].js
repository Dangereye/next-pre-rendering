const ArticleListByCategory = ({ articles, category }) => {
  return (
    <div className="container">
      <h2>{category} News</h2>
      {articles.map((article) => (
        <div className="card" key={article.id}>
          <h3>
            {article.id}, {article.title} - {article.category}
          </h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=craig"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: { articles: data, category },
  };
};
