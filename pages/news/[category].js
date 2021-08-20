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
  const { params } = context;
  const { category } = params;
  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();

  return {
    props: { articles: data, category },
  };
};
