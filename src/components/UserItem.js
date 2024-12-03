import { useContext } from 'react';

import { UsersContext } from '../context';

const UserItem = ({ user }) => {
  const { handleSelectedUsers, selectedUsersIds } = useContext(UsersContext);

  const { avatar, id, first_name, last_name } = user;

  const image = <img src={avatar} alt="no_photo" />;
  const imagePlaceHolder = `${first_name.charAt(0)} ${last_name.charAt(0)}`;

  const avatarImage = avatar ? image : imagePlaceHolder;

  return (
    <div className="contact--list-item" onClick={() => handleSelectedUsers(id)}>
      <div className="contact--avatar">{avatarImage}</div>
      <div className="contact--full-name">{`${first_name} ${last_name}`}</div>
      <div className="contact--checkbox">
        <input
          type="checkbox"
          checked={selectedUsersIds.includes(id)}
          id={id}
        ></input>
      </div>
    </div>
  );
};

export default UserItem;
