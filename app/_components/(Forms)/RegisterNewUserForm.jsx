'use client';

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
import { Input } from '~/components/ui/input';
import { wait } from '~/lib/utils';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

const RegisterNewUserForm = ({ currentIndex, fetchUsers }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    role: 'writer',
    lastName: '',
    password: '',
    passwordConfirm: '',
  });

  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    const { passwordConfirm, ...submissionData } = formState;

    try {
      const response = await fetch(`${process.env.API_URL}/users/register`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        toast.error('Hiba történt a regisztráció során!');
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`w-full ${currentIndex % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
      >
        <div className={`h-fit`}>
          <p className="text-bme-blue dark:text-bme-orange mx-auto w-fit cursor-pointer font-semibold">
            + új tag hozzáadása
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'lg:text-2xl'}>Új felhasználó regisztrálása</DialogTitle>
          <DialogDescription>
            A <b>&quot;role&quot;</b> automatikusan beállításra kerül a <b>&quot;writer&quot;</b> értékre!
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            handleSubmission(e);
          }}
          className="select-none"
        >
          <div className="grid gap-6">
            <div className="grid gap-4 lg:grid-flow-col">
              <div>
                <label htmlFor="lastName">Vezetéknév</label>
                <Input type="text" id="lastName" onChange={writeData} required defaultValue={''} placeholder="Jhon" />
              </div>
              <div>
                <label htmlFor="firstName">Keresztnév</label>
                <Input type="text" id="firstName" onChange={writeData} required defaultValue={''} placeholder="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                onChange={writeData}
                required
                defaultValue={''}
                placeholder="info@solarboatteam.hu"
              />
            </div>
            <div>
              <label htmlFor="password">Jelszó</label>
              <div className="relative">
                <Input
                  type={visible ? 'text' : 'password'}
                  id="password"
                  onChange={writeData}
                  required
                  defaultValue={''}
                  placeholder=""
                />
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
              <label htmlFor="passwordConfirm">Jelszó megerősítése</label>
              <div className="relative">
                <Input
                  type={visible ? 'text' : 'password'}
                  id="passwordConfirm"
                  onChange={writeData}
                  required
                  defaultValue={''}
                  placeholder=""
                />
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
          <DialogFooter className={'mt-4 w-full'}>
            <Button className="w-full cursor-pointer" onClick={handleSubmission}>
              Tag Regisztrálása
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterNewUserForm;
