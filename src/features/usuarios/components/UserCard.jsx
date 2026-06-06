const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-details">
        <span className="user-name">{user.name}</span>
        <span className="user-email">{user.email}</span>
      </div>
    </div>
  );
};

export default UserCard;
