const User = ({ user }) => {
  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
};

export default User;
