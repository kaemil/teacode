import { useState } from 'react';
import { sortBy } from 'lodash';
import React from 'react';

import { UsersContext } from './context';

import usePagination from './hooks/usePagination';
import useGetUsers from './hooks/useGetUsers';

import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';
import Loader from './components/Loader';

const App = () => {
  const [selectedUsersIds, setSelectedUsersIds] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const { users, isLoading } = useGetUsers();

  const pagination = usePagination({ users });

  const { page, sliceDataPerPage } = pagination;

  const filteredList = users.filter(({ first_name, last_name }) => {
    const fullName = `${first_name.toLowerCase()} ${last_name.toLowerCase()}`;

    return searchValue ? fullName.includes(searchValue) : true;
  });

  const sortedList = sortBy(filteredList, 'last_name');

  const paginatedUsersList = sliceDataPerPage(sortedList, page);

  /**
   * Handle selected users
   */
  const handleSelectedUsers = (id) => {
    setSelectedUsersIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
    );
  };

  const handleUsersSubmit = () => {
    if (!selectedUsersIds.length) return;

    window.alert(JSON.stringify(selectedUsersIds));
  };

  return (
    <UsersContext.Provider
      value={{
        handleSelectedUsers,
        selectedUsersIds,
      }}
    >
      <div className="contact-container">
        <div className="contact-header">
          <h2>List of Contacts</h2>
        </div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {isLoading ? <Loader /> : <UsersList usersList={paginatedUsersList} />}
        <Pagination {...pagination} />
        <div className="contact-send">
          <button
            disabled={!selectedUsersIds.length}
            onClick={handleUsersSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </UsersContext.Provider>
  );
};

export default App;
