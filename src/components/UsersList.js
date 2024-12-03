import UserItem from './UserItem';

const UsersList = ({ usersList = [] }) => (
  <div className="contact--users-list">
    {usersList.map((user) => (
      <UserItem key={user.id} user={user} />
    ))}
  </div>
);

export default UsersList;
