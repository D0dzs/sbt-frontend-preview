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

const RegisterNewUserForm = ({ currentIndex }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
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

  const handleSubmission = (e) => {
    e.preventDefault();

    const { passwordConfirm, ...submissionData } = formState;

    if (formState.password !== formState.passwordConfirm) {
      return toast.error('A jelszavak nem egyeznek!');
    } else {
      toast.success('Sikeres regisztráció!');
      console.log(submissionData);
      // TODO: Implement POST request towards the backend
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <div
          className={`h-fit ${currentIndex % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
        >
          <p className="text-bme-blue dark:text-bme-orange mx-auto w-fit cursor-pointer font-semibold">
            + új tag hozzáadása
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Új felhasználó regisztrálása</DialogTitle>
          <DialogDescription>Rizsa szoveg...</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            wait().then(() => setOpen(!open));
            handleSubmission(e);
          }}
          className="select-none"
        >
          <div className="grid gap-4">
            <div className="grid grid-flow-col gap-4">
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
          <DialogFooter className={'mt-3'}>
            <Button type="submit" className="cursor-pointer">
              Regisztráció
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterNewUserForm;
