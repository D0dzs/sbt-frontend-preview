'use client';

import { useEffect, useState } from 'react';
import DisplayGroups from './DisplayGroups';
import PriviligedControls from './PriviligedControls';

const TeamPageContent = () => {
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const [sGroups, setSGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/users/all`, { credentials: 'include' });
      const ctx = await res.json();
      const { users } = ctx;
      setUsers(users);
    } catch (error) {
      setError('Hiba történt az adatok lekérdezése közben.');
    }
  };

  const fetchGroups = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/group/all`, { credentials: 'include' });
      const ctx = await res.json();
      const { groups } = ctx;
      setGroups(groups);
    } catch (error) {
      setError('Hiba történt az adatok lekérdezése közben.');
    }
  };

  const fetchSGroups = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/subgroup/all`, { credentials: 'include' });
      const ctx = await res.json();
      const { groups } = ctx;
      setSGroups(groups);
    } catch (error) {
      setError('Hiba történt az adatok lekérdezése közben.');
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchGroups();
    fetchSGroups();
  }, [refresh]);

  return (
    <div className="grid gap-16">
      <PriviligedControls error={error} users={users} groups={groups} sGroups={sGroups} setRefresh={setRefresh} />
      <DisplayGroups setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default TeamPageContent;
