'use client';

import { useContext, useState } from 'react';
import { UserContext } from '../Providers/User-provider';
import { isAdmin } from '~/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { wait } from '~/lib/utils';
import { toast } from 'sonner';

const TeamMember = ({ user, position, group, setRefresh, isItSubGroup }) => {
  const { user: currentUser } = useContext(UserContext);
  const privileged = isAdmin(currentUser);
  const { firstName, lastName } = user;
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.API_URL}/group/remove-user`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, group, isItSubGroup }),
    });

    const ctx = await response.json();
    if (!response.ok) {
      toast.error(ctx.message);
    } else {
      toast.success(ctx.message);
      setRefresh((ctx) => !ctx);
    }
  };

  return privileged ? (
    <div className="relative mb-2 flex flex-col items-center justify-center gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="hover:bg-bme-lsecondary/35 dark:hover:bg-hovered-bme-black/35 absolute z-1 h-full w-full hover:cursor-pointer hover:backdrop-blur-xs hover:before:mx-auto hover:before:flex hover:before:h-full hover:before:w-full hover:before:items-center hover:before:justify-around hover:before:content-['🗑️']" />
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={'lg:text-2xl'}>Biztosan törlöd?</DialogTitle>
            <DialogDescription>
              <form
                onSubmit={(e) => {
                  wait().then(() => setOpen(!open));
                  handleSubmit(e);
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  Biztosan törlöni szeretnéd{' '}
                  <b>
                    {firstName} {lastName}
                  </b>{' '}
                  a(z) <b>{group}</b> csoportból?
                </div>
                <DialogFooter>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(!open);
                    }}
                    className="bg-bme-blue hover:bg-hovered-bme-blue dark:bg-bme-orange dark:text-bme-black dark:hover:bg-hovered-bme-orange cursor-pointer"
                  >
                    Mégsem
                  </Button>
                  <Button className="text-bme-white cursor-pointer bg-[#ff0000] hover:bg-[#f00000]">Eltávolítás</Button>
                </DialogFooter>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* eslint-disable-next-line */}
      <img
        src={user.avatarURL ?? '/navbar/logo.svg'}
        alt={firstName + ' ' + lastName}
        className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
      />
      <h2 className="text-lg font-bold">
        {firstName} {lastName}
      </h2>
      {position ? <p className="text-sm opacity-50">{position}</p> : null}
    </div>
  ) : (
    <div className="mb-2 flex flex-col items-center justify-center gap-2">
      {/* eslint-disable-next-line */}
      <img
        src={user.avatarURL ?? '/navbar/logo.svg'}
        alt={firstName + ' ' + lastName}
        className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
      />
      <h2 className="text-lg font-bold">
        {firstName} {lastName}
      </h2>
      {position ? <p className="text-sm opacity-50">{position}</p> : null}
    </div>
  );
};

export default TeamMember;
