'use client';

import { useContext } from 'react';
import { MobileContext } from '../Providers/Screen-provider';
import { CheckIcon, XIcon } from 'lucide-react';

const UserTable = ({ dataArray }) => {
  const isMobile = useContext(MobileContext);

  return isMobile ? (
    <div className="dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 mx-auto h-fit w-full max-w-[70vw] overflow-clip rounded-3xl shadow-xl outline-2 *:p-4">
      <div className="bg-bme-blue dark:bg-bme-orange text-bme-white dark:text-bme-black grid p-3">
        <p className="text-center text-xl">Név</p>
      </div>
      {[...dataArray, 'newUserField'].map((user, i) => {
        if (user === 'newUserField') {
          return (
            <div
              key={i}
              className={`${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-bme-blue dark:text-bme-orange mx-auto w-fit cursor-pointer font-semibold">
                + új tag hozzáadása
              </p>
            </div>
          );
        } else {
          return !user.state ? (
            <div
              key={i}
              className={`grid items-center ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-center">{user.name}</p>
            </div>
          ) : (
            <div
              key={i}
              className={`striketrough grid items-center *:opacity-50 ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-center">{user.name}</p>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <div className="dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 mx-auto w-[60vw] overflow-clip rounded-3xl shadow-xl outline-2 *:p-4 *:px-6">
      <div className="bg-bme-blue dark:bg-bme-orange text-bme-white dark:text-bme-black grid grid-cols-4 p-3">
        <p className="text-left text-xl">Név</p>
        <p className="text-center text-xl">Role</p>
        <p className="text-center text-xl">Jelszó</p>
        <p className="text-right text-xl">Aktív</p>
      </div>
      {[...dataArray, 'newUserField'].map((user, i) => {
        if (user === 'newUserField') {
          return (
            <div
              key={i}
              className={`h-fit ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-bme-blue dark:text-bme-orange mx-auto w-fit cursor-pointer font-semibold">
                + új tag hozzáadása
              </p>
            </div>
          );
        } else {
          return !user.state ? (
            <div
              key={i}
              className={`grid grid-cols-4 items-center ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-left">{user.name}</p>
              <p className="text-center">{user.role.toUpperCase()}</p>
              <p className="cursor-pointer text-center text-blue-500 underline">Módosítás</p>
              <CheckIcon size={28} className="ml-auto" />
            </div>
          ) : (
            <div
              key={i}
              className={`striketrough grid grid-cols-4 items-center *:opacity-50 ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-left">{user.name}</p>
              <p className="text-center">{user.role.toUpperCase()}</p>
              <p className="text-center">Módosítás</p>
              <XIcon size={28} className="ml-auto" />
            </div>
          );
        }
      })}
    </div>
  );
};

export default UserTable;
