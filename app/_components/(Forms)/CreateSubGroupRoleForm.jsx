'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';
import { wait } from '~/lib/utils';

const CreateSubGroupRoleForm = ({ sGroups, refresh, setRefresh }) => {
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    subGroupName: '',
  });

  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.API_URL}/subgroup/create-position`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formState),
    });

    if (!response.ok) {
      const ctx = await response.json();
      toast.error(ctx.message);
      return;
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
        <Button className="cursor-pointer">Al-csoport Role létrehozása</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'lg:text-2xl'}>Al-csoport Role létrehozása</DialogTitle>
        </DialogHeader>
        <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Select onValueChange={(value) => setFormState({ ...formState, subGroupName: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Csoport kiválasztása" />
              </SelectTrigger>
              <SelectContent>
                {sGroups.map((group, idx) => (
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
            <label htmlFor="name" className="text-sm lg:text-base">
              Szerepkör megnevezése
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              onChange={writeData}
              required
              className="focus:ring-bme-blue focus:border-bme-blue w-full rounded-md border-gray-300 p-2 text-sm focus:outline-none lg:text-base"
            />
          </div>

          <DialogFooter className={'mt-4'}>
            <Button className="w-full cursor-pointer" disabled={formState.subGroupName === ''}>
              Létrehozása
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSubGroupRoleForm;
