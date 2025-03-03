'use client';

import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';
import { wait } from '~/lib/utils';

const CreateGroupRoleForm = ({ groups, refresh, setRefresh }) => {
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
    groupName: '',
    roleName: '',
  });

  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.API_URL}/group/create-position`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formState),
    });

    if (!response.ok) {
      const ctx = await response.json();
      return toast.error(ctx.message);
    } else {
      const ctx = await response.json();
      toast.success(ctx.message);
      wait().then(() => {
        setRefresh(!refresh);
        setOpen(false);
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Csapat Role létrehozása</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'lg:text-2xl'}>Csoport létrehozása</DialogTitle>
        </DialogHeader>
        <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Select onValueChange={(value) => setFormState({ ...formState, groupName: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Csoport kiválasztása" />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group, idx) => (
                  <SelectItem
                    key={idx}
                    value={group.name}
                    className="cursor-pointer lg:not-hover:opacity-50 lg:hover:opacity-100"
                  >
                    {group.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="roleName" className="text-sm lg:text-base">
              Szerepkör megnevezése
            </label>
            <Input
              id="roleName"
              type="text"
              name="roleName"
              onChange={writeData}
              required
              className="focus:ring-bme-blue focus:border-bme-blue w-full rounded-md border-gray-300 p-2 text-sm focus:outline-none lg:text-base"
            />
          </div>

          <DialogFooter className={'mt-4'}>
            <Button className="w-full cursor-pointer" disabled={formState.groupName === ''}>
              Létrehozása
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroupRoleForm;
