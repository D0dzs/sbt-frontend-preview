'use client';

import Cookies from 'js-cookie';
import { createContext, useState, useEffect, useCallback } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const token = Cookies.get('token');

  const getUser = useCallback(async (token) => {
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const userResponse = await fetch('http://localhost:8080/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (userResponse.ok) {
        const parsed = await userResponse.json();
        setUser(parsed.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  }, []);

  const logout = useCallback(() => {
    Cookies.remove('token');
    setUser(null);
    setRefresh((prev) => !prev);
  }, []);

  useEffect(() => {
    getUser(token);
  }, [token, refresh, getUser]);

  return <UserContext.Provider value={{ user, setUser, refresh, setRefresh, logout }}>{children}</UserContext.Provider>;
};
