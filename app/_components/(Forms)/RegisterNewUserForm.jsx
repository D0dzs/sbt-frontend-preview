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
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';

const RegisterNewUserForm = ({ currentIndex, fetchUsers }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    role: 'writer',
    lastName: '',
    password: '',
    passwordConfirm: '',
    avatar: null,
  });

  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormState((prev) => ({ ...prev, avatar: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormState((prev) => ({ ...prev, avatar: null }));
      setImagePreview(null);
    }
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const { passwordConfirm, ...submissionData } = formState;

    try {
      if (formState.password !== formState.passwordConfirm) return toast.error('A jelszó nem egyezik!');

      const formData = new FormData();
      formData.append('email', submissionData.email);
      formData.append('firstName', submissionData.firstName);
      formData.append('lastName', submissionData.lastName);
      formData.append('password', submissionData.password);
      formData.append('role', submissionData.role);
      formData.append('avatar', submissionData.avatar);

      const response = await fetch(`${process.env.API_URL}/users/register`, {
        credentials: 'include',
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const ctx = await response.json();
        toast.error(ctx.errors[0] ?? ctx.message ?? 'Unknown error');
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
        onClick={() => setImagePreview(null)}
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
            A <b>role</b> automatikusan beállításra kerül a <b>&quot;writer&quot;</b> értékre!
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            handleSubmission(e);
          }}
          encType="multipart/form-data"
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

              <div className="w-full bg-red-500"></div>
            </div>
            <div>
              <label htmlFor="avatar">Kép feltöltése</label>
              <div className="relative my-4">
                <div className="hover:bg-bme-lfront hover:dark:bg-bme-dfront/20 flex w-full items-center justify-center rounded-lg transition-colors">
                  <label
                    htmlFor="dropzone-file"
                    className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-px text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <code className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, SVG and WEBP only (max 5MB)
                      </code>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      name="avatar"
                      accept="image/png, image/webp, image/jpeg, image/svg"
                      onChange={handleAvatarChange}
                    />
                  </label>
                </div>
              </div>
              {imagePreview ? (
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer text-center text-xs italic opacity-50">
                    <p>
                      Kép megtekintése (hover)
                      <br />
                      <i className="opacity-50">Telefonos nézet nem elérhető!</i>
                    </p>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imagePreview} alt="Logo Preview" className="mx-auto w-auto rounded" />
                  </HoverCardContent>
                </HoverCard>
              ) : null}
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
