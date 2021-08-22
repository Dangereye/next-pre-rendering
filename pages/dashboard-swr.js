import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) {
    return (
      <div className="container">
        <h2>Oops! Something went wrong?</h2>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="container">
        <h2>Loading data...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Dashboard SWR</h2>
      <h3>Posts - {data.posts}</h3>
      <h3>Likes - {data.likes}</h3>
      <h3>Followers - {data.followers}</h3>
      <h3>Following - {data.following}</h3>
    </div>
  );
};

export default DashboardSWR;
