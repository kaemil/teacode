import { useEffect, useState } from 'react';

import { API_USERS } from '../consts';

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Get users from API
   */
  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(API_USERS);
      const data = await response.json();

      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { users, isLoading };
};

export default useGetUsers;
