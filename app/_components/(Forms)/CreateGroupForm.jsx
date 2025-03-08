'use client';

import { useState, useEffect } from 'react';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { wait } from '~/lib/utils';
import { toast } from 'sonner';

const CreateGroupForm = ({ users, setRefresh }) => {
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    id: '',
  });

  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.API_URL}/group/create`, {
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
      } else {
        const ctx = await response.json();
        toast.success(ctx.message);
        setRefresh((prev) => !prev);
        wait().then(() => setOpen(false));
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Csoport létrehozása</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'lg:text-2xl'}>Csoport létrehozása</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <form className="mt-4 flex flex-col gap-4 p-1" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="name" className="text-sm lg:text-base">
                Megnevezése
              </label>
              <Input id="name" type="text" name="groupName" onChange={writeData} required />
            </div>
            <div>
              <label htmlFor="description" className="text-sm lg:text-base">
                Leírás
              </label>
              <Textarea id="description" className="max-h-80 min-h-32" name="description" onChange={writeData} />
            </div>
            <div>
              <Select onValueChange={(value) => setFormState({ ...formState, id: value })} disabled={!formState.name}>
                <SelectTrigger>
                  <SelectValue placeholder="Vezető kiválasztása" />
                </SelectTrigger>
                <SelectContent>
                  {users.length > 0 ? (
                    users.map((user, idx) => (
                      <SelectItem
                        value={user.id}
                        key={idx}
                        className="cursor-pointer lg:not-hover:opacity-50 lg:hover:opacity-100"
                      >
                        {user.lastName} {user.firstName}
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

            <DialogFooter className={'mt-4'}>
              <Button className="w-full cursor-pointer" disabled={!formState.id}>
                Létrehozása
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroupForm;
