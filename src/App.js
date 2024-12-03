import { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import React from 'react';

import { UsersContext } from './context';

import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';

import { API_USERS, DATA_PER_PAGE } from './consts';

const App = () => {
  const [selectedUsersIds, setSelectedUsersIds] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  /**
   * Get users from API
   */
  const fetchData = async () => {
    const response = await fetch(API_USERS);
    const data = await response.json();

    if (data) {
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Change page down
   */
  const handlePageDown = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  /**
   * Change page up
   */
  const handlePageUp = () => {
    if (page < Math.round(users.length / DATA_PER_PAGE)) {
      setPage((prev) => prev + 1);
    }
  };

  /**
   * Slice date for page
   */
  const paginatedData = (data = [], page = 1, dataPerPage = DATA_PER_PAGE) => {
    const startIndex = (page - 1) * dataPerPage;

    return data?.slice(startIndex, startIndex + dataPerPage);
  };

  const filteredList = users.filter(({ first_name, last_name }) => {
    const fullName = `${first_name.toLowerCase()} ${last_name.toLowerCase()}`;

    return searchValue ? fullName.includes(searchValue) : true;
  });

  const sortedList = sortBy(filteredList, 'last_name');

  const paginatedUsersList = paginatedData(sortedList, page);

  /**
   * Handle selected users
   */
  const handleSelectedUsers = (id) => {
    setSelectedUsersIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
    );
  };

  const handleUsersSubmit = () => {
    window.alert(JSON.stringify(selectedUsersIds));
  };

  return (
    <UsersContext.Provider
      value={{
        handleSelectedUsers,
        selectedUsersIds,
        searchValue,
        setSearchValue,
      }}
    >
      <div className="contact--container">
        <div className="contact--header">
          <h2>List of Contacts</h2>
        </div>
        <SearchBar />
        <UsersList usersList={paginatedUsersList} />
        <Pagination
          page={page}
          handlePageDown={handlePageDown}
          handlePageUp={handlePageUp}
        />
        <div className="contact--send">
          <button onClick={handleUsersSubmit}>Send</button>
        </div>
      </div>
    </UsersContext.Provider>
  );
};

export default App;
