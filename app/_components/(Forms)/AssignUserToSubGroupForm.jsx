'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '~/components/ui/button';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { wait } from '~/lib/utils';

const AssignUserToSubGroupForm = ({ users, sGroups, refresh, setRefresh }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    username: '',
    subgroupname: '',
    rolename: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.API_URL}/subgroup/assign-position`, {
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

  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!open) {
      setFormState({
        username: '',
        subgroupname: '',
        rolename: '',
      });
    }
  }, [open]);

  const handleUserChange = (value) => {
    setFormState({ ...formState, username: value });
  };

  const handleGroupChange = (value) => {
    setFormState({ ...formState, subgroupname: value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Tag hozzáadása (al-csoport)</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'lg:text-2xl'}>Tag hozzáadása</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="user" className="mb-1 block text-sm lg:text-base">
              Felhasználó
            </label>
            <Select onValueChange={handleUserChange}>
              <SelectTrigger>
                <SelectValue placeholder="Tag kiválasztása" />
              </SelectTrigger>
              <SelectContent>
                {users.length > 0 ? (
                  users.map((user, idx) => (
                    <SelectItem
                      value={`${user.firstName} ${user.lastName}`}
                      key={idx}
                      className="cursor-pointer lg:not-hover:opacity-50 lg:hover:opacity-100"
                    >
                      {user.firstName} {user.lastName}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="No users found" key="no-users" disabled>
                    No users found
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <label htmlFor="subgroupname" className="mb-1 block text-sm lg:text-base">
              Al-Csoport
            </label>
            <Select onValueChange={handleGroupChange} disabled={!formState.username}>
              <SelectTrigger>
                <SelectValue placeholder="Al-csoport kiválasztása" />
              </SelectTrigger>
              <SelectContent>
                {sGroups.length > 0 ? (
                  sGroups.map((group, idx) => (
                    <SelectItem
                      value={group.name}
                      key={idx}
                      className="cursor-pointer lg:not-hover:opacity-50 lg:hover:opacity-100"
                    >
                      {group.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="No sub-groups found" key="no-sub-groups" disabled>
                    No sub-groups found
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <label htmlFor="rolename" className="mb-1 block text-sm lg:text-base">
              Szerepkör
            </label>
            <Input onChange={writeData} id="rolename" disabled={!formState.subgroupname} required />
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            onClick={(e) => handleSubmit(e)}
            disabled={!formState.username || !formState.subgroupname || !formState.rolename}
          >
            Hozzáadás
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssignUserToSubGroupForm;
