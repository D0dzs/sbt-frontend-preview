'use client';

import { UserContext } from '../Providers/User-provider';
import { isAdmin } from '~/lib/utils';
import CreateGroupForm from '../(Forms)/CreateGroupForm';
import CreateGroupRoleForm from '../(Forms)/CreateGroupRoleForm';
import CreateSubGroupForm from '../(Forms)/CreateSubGroupForm';
import CreateSubGroupRoleForm from '../(Forms)/CreateSubGroupRoleForm';
import AssignUserToGroupForm from '../(Forms)/AssignUserToGroupForm';
import AssignUserToSubGroupForm from '../(Forms)/AssignUserToSubGroupForm';
import { useEffect, useState, useContext } from 'react';

const PriviligedControls = () => {
  const { user } = useContext(UserContext);
  const privileged = isAdmin(user);

  const [refresh, setRefresh] = useState(false);

  const [sGroups, setSGroups] = useState([]);
  const [sGroupRoles, setSGroupRoles] = useState([]);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupRoles, setGroupRoles] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/users/all`, { credentials: 'include' });
      const ctx = await res.json();
      const { users } = ctx;
      setUsers(users);
    } catch (error) {
      throw error;
    }
  };

  const fetchGroups = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/group/all`, { credentials: 'include' });
      const ctx = await res.json();
      const { groups } = ctx;
      setGroups(groups);
    } catch (error) {
      throw error;
    }
  };

  const fetchGroupRoles = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/group/roles`, { credentials: 'include' });
      const ctx = await res.json();
      const { roles } = ctx;
      setGroupRoles(roles);
    } catch (error) {
      throw error;
    }
  };

  const fetchSGroups = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/subgroup/all`, { credentials: 'include' });
      const ctx = await res.json();
      const { groups } = ctx;
      setSGroups(groups);
    } catch (error) {
      throw error;
    }
  };

  const fetchSGroupRoles = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/subgroup/roles`, { credentials: 'include' });
      const ctx = await res.json();
      const { roles } = ctx;
      setSGroupRoles(roles);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchGroups();
    fetchGroupRoles();
    fetchSGroups();
    fetchSGroupRoles();
  }, [refresh]);

  return privileged ? (
    <div className="mx-auto w-[85vw] lg:w-[60vw]">
      <div className="flex w-full flex-wrap place-items-center justify-center gap-8 lg:gap-12">
        <div>
          <h3 className="mb-3 text-center lg:text-2xl">Csoporttal kapcsolatos adatrogzites</h3>
          <div className="mx-auto flex max-w-96 flex-wrap place-items-center gap-4 *:w-full lg:flex-col">
            <CreateGroupForm users={users} refresh={refresh} setRefresh={setRefresh} />
            <CreateGroupRoleForm groups={groups} refresh={refresh} setRefresh={setRefresh} />
            <AssignUserToGroupForm
              users={users}
              groups={groups}
              groupRoles={groupRoles}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-center lg:text-2xl">Al-csoporttal kapcsolatos adatrogzites</h3>
          <div className="mx-auto flex max-w-96 flex-wrap place-items-center gap-4 *:w-full lg:flex-col">
            <CreateSubGroupForm users={users} groups={groups} refresh={refresh} setRefresh={setRefresh} />
            <CreateSubGroupRoleForm sGroups={sGroups} refresh={refresh} setRefresh={setRefresh} />
            <AssignUserToSubGroupForm
              users={users}
              sGroups={sGroups}
              sGroupRoles={sGroupRoles}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PriviligedControls;
