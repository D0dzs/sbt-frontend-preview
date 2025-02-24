'use client';

import { useState } from 'react';
import { wait } from '~/lib/utils';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

// TODO: Implement POST request towards the backend

const ResetPasswordForm = ({ user, isOpen, onOpenChange }) => {
  const [formState, setFormState] = useState({
    email: user?.email || '',
    password: '',
    passwordConfirm: '',
  });

  const resetFormState = () => {
    setFormState({
      email: user?.email || '',
      password: '',
      passwordConfirm: '',
    });
  };

  const handleOpenChange = (open) => {
    if (!open) resetFormState();

    onOpenChange(open);
  };

  const writeData = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    if (formState.password !== formState.passwordConfirm) {
      return toast.error('A jelszavak nem egyeznek!');
    } else {
      toast.success('Jelszó módosítva!');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger className="mx-auto w-fit cursor-pointer text-center text-blue-500 underline">
        Módosítás
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user?.name} - felhasználó jelszó módosítása</DialogTitle>
          <DialogDescription>
            Email {user?.email}
            <br />
            Role {user?.role?.toUpperCase()}
            <br />
            <span className="w-full text-xs font-semibold text-[#ff0000]">
              A jelszó megváltoztatása követoen el kell kuldeni a felhasználónak!
            </span>
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            wait().then(() => handleOpenChange(false));
            handlePasswordChange(e);
          }}
        >
          <div className="flex flex-col gap-3 py-4">
            <div>
              <label htmlFor="password" className="ml-3">
                Új jelszó
              </label>
              <Input
                type="password"
                onChange={writeData}
                name="password"
                value={formState.password}
                required
                className="mt-px"
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="ml-3">
                Új jelszó megerősítése
              </label>
              <Input
                type="password"
                onChange={writeData}
                name="passwordConfirm"
                value={formState.passwordConfirm}
                required
                className="mt-px"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="cursor-pointer">
              Változtatás
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordForm;
