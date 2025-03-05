'use client';

import { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(async () => {
    const res = await fetch(`${process.env.API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    const ctx = await res.json();
    toast.success(ctx.message);
    setUser(null);
    setRefresh((prev) => !prev);
  }, []);

  const getUserInfo = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.API_URL}/auth/me`, {
        method: 'GET',
        credentials: 'include',
      }).catch((error) => {
        throw error;
      });

      if (response.status === 401) {
        const refreshResponse = await fetch(`${process.env.API_URL}/auth/refresh`, {
          method: 'POST',
          credentials: 'include',
        });

        if (refreshResponse.ok) {
          const retryResponse = await fetch(`${process.env.API_URL}/auth/me`, {
            method: 'GET',
            credentials: 'include',
          });

          if (retryResponse.ok) {
            const { user } = await retryResponse.json();
            setUser(user);
          }
        }
      } else {
        const { user } = await response.json();
        setUser(user);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo, refresh]);

  return <UserContext.Provider value={{ user, logout, refresh, setRefresh, loading }}>{children}</UserContext.Provider>;
};
