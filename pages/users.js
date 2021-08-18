import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <div className="container">
      <h1>List of users</h1>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};
export default UserList;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { users: data } };
};
