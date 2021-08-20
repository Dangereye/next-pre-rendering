import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <div className="container">
      <h2>List of Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
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
