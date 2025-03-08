'use client';

import { UserContext } from '../Providers/User-provider';
import { isAdmin } from '~/lib/utils';
import CreateGroupForm from '../(Forms)/CreateGroupForm';
import CreateSubGroupForm from '../(Forms)/CreateSubGroupForm';
import AssignUserToGroupForm from '../(Forms)/AssignUserToGroupForm';
import AssignUserToSubGroupForm from '../(Forms)/AssignUserToSubGroupForm';
import { useContext } from 'react';

const PriviligedControls = ({ users, groups, sGroups, error, setRefresh }) => {
  const { user } = useContext(UserContext);
  const privileged = isAdmin(user);

  if (error) return <div className="p-4 text-center text-2xl text-red-500">{error}</div>;

  return privileged ? (
    <div className="mx-auto w-[85vw] lg:w-[60vw]">
      <p className="lg:text- mb-4 w-full text-center opacity-75">
        Adott tag eltávolításához, szimplán katt az emberre!
      </p>
      <div className="flex w-full flex-wrap place-items-center justify-center gap-8 lg:gap-12">
        <div>
          <h3 className="mb-3 text-center lg:text-2xl">Csoporttal kapcsolatos adatrogzites</h3>
          <div className="mx-auto flex max-w-96 flex-wrap place-items-center gap-4 *:w-full lg:flex-col">
            <CreateGroupForm users={users} setRefresh={setRefresh} />
            <AssignUserToGroupForm users={users} groups={groups} setRefresh={setRefresh} />
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-center lg:text-2xl">Alcsoporttal kapcsolatos adatrogzites</h3>
          <div className="mx-auto flex max-w-96 flex-wrap place-items-center gap-4 *:w-full lg:flex-col">
            <CreateSubGroupForm users={users} groups={groups} setRefresh={setRefresh} />
            <AssignUserToSubGroupForm users={users} sGroups={sGroups} setRefresh={setRefresh} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PriviligedControls;
