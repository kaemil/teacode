import UserItem from './UserItem';

const UsersList = ({ usersList = [] }) => (
  <div className="contact-users-list">
    {usersList.length ? (
      usersList.map((user) => <UserItem key={user.id} user={user} />)
    ) : (
      <div className="contact-no-data">Brak wyników</div>
    )}
  </div>
);

export default UsersList;
