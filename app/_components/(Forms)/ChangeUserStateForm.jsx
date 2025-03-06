'use client';

import { CheckIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { wait } from '~/lib/utils';

const ChangeUserStateForm = ({ user, fetchUsers }) => {
  const [open, setOpen] = useState(false);

  const handleSubmission = async (event) => {
    event.preventDefault();

    try {
      const requestBody = { id: user.id, firstName: user.firstName, lastName: user.lastName };
      const response = await fetch(`${process.env.API_URL}/users/change-state`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        toast.error('Hiba történt a státusz módosítás során!');
      } else {
        const ctx = await response.json();
        toast.success(ctx.message);
        wait().then(async () => {
          if (fetchUsers) await fetchUsers();
          setOpen(!open);
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return !user.state ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="z-1 ml-auto cursor-pointer">
        <CheckIcon size={28} />
      </DialogTrigger>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={'lg:text-2xl'}>Aktív - Inaktív státusz állítása</DialogTitle>
            <DialogDescription>
              Biztosan at szeretned allitani{' '}
              <span className="font-semibold">
                {user.lastName} {user.firstName}
              </span>{' '}
              statuszat a kovetkezore?
              <br />
              <code className="text-bme-blue dark:text-bme-orange text-lg font-semibold">
                {user.state ? 'Aktív' : 'Inaktív'}
              </code>
            </DialogDescription>
            <DialogFooter>
              <Button className="cursor-pointer" variant="outline" onClick={() => setOpen((prev) => !prev)}>
                Cancel
              </Button>
              <Button className="cursor-pointer" variant="destructive" onClick={handleSubmission}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </form>
    </Dialog>
  ) : (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="z-1 ml-auto cursor-pointer">
        <XIcon size={28} />
      </DialogTrigger>
      <form onSubmit={(e) => handleSubmission(e)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={'lg:text-2xl'}>Aktív - Inaktív státusz állítás</DialogTitle>
            <DialogDescription>
              <br />
              Biztosan at szeretned allitani <span className="font-semibold">{user.name}</span> státusztát a
              kovetkezore?
              <br />
              <code className="text-bme-blue dark:text-bme-orange text-lg font-semibold">
                {user.state ? 'Aktív' : 'Inaktív'}
              </code>
            </DialogDescription>
            <DialogFooter>
              <Button className="cursor-pointer" variant="outline" onClick={() => setOpen((prev) => !prev)}>
                Cancel
              </Button>
              <Button className="cursor-pointer" variant="destructive" onClick={handleSubmission}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ChangeUserStateForm;
