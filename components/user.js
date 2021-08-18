const User = ({ user }) => {
  return (
    <div key={user.id} className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
