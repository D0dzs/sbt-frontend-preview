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
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

const ResetPasswordForm = ({ user, isOpen, onOpenChange }) => {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    id: user?.id || '',
    password: '',
    passwordConfirm: '',
  });

  const resetFormState = () => {
    setFormState({
      id: user?.id || '',
      password: '',
      passwordConfirm: '',
    });
  };

  const handleOpenChange = (open) => {
    if (!open) resetFormState();

    onOpenChange(open);
    setVisible(false);
  };

  const writeData = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (formState.password !== formState.passwordConfirm) {
      return toast.error('A jelszavak nem egyeznek!');
    } else {
      const { passwordConfirm, ...submissionData } = formState;

      try {
        const response = await fetch(`${process.env.API_URL}/users/change-password`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(submissionData),
        });

        if (!response.ok && response.status === 400) {
          const ctx = await response.json();
          const { errors } = ctx;
          toast.error(errors[0]);
          return;
        } else {
          const ctx = await response.json();
          toast.success(ctx.message);
          wait().then(async () => handleOpenChange(false));
        }
      } catch (error) {
        throw error;
      }

      wait().then(() => handleOpenChange(false));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger className="mx-auto w-fit cursor-pointer text-center text-blue-500 underline">
        Módosítás
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'lg:text-2xl'}>
            {user?.lastName} {user?.firstName} - Jelszó módosítása
          </DialogTitle>
          <DialogDescription>
            <span className="w-full text-xs font-semibold text-[#ff0000]">
              A jelszó megváltoztatása követoen el kell kuldeni a felhasználónak!
            </span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={(e) => handlePasswordChange(e)}>
          <div className="flex flex-col gap-8 py-4">
            <div>
              <label htmlFor="password">Új jelszó</label>
              <div className="relative">
                <Input type={visible ? 'text' : 'password'} onChange={writeData} name="password" required />
                {visible ? (
                  <EyeClosedIcon
                    size={20}
                    onClick={() => setVisible(!visible)}
                    className="absolute top-2 right-2 cursor-pointer opacity-50"
                  />
                ) : (
                  <EyeIcon
                    size={20}
                    onClick={() => setVisible(!visible)}
                    className="absolute top-2 right-2 cursor-pointer opacity-50"
                  />
                )}
              </div>
            </div>
            <div>
              <label htmlFor="passwordConfirm">Új jelszó megerősítése</label>
              <div className="relative">
                <Input type={visible ? 'text' : 'password'} onChange={writeData} name="passwordConfirm" required />
                {visible ? (
                  <EyeClosedIcon
                    size={20}
                    onClick={() => setVisible(!visible)}
                    className="absolute top-2 right-2 cursor-pointer opacity-50"
                  />
                ) : (
                  <EyeIcon
                    size={20}
                    onClick={() => setVisible(!visible)}
                    className="absolute top-2 right-2 cursor-pointer opacity-50"
                  />
                )}
              </div>
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
