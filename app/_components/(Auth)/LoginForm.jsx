'use client';

import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'sonner';
import { UserContext } from '../Providers/User-provider';
import { EyeIcon, EyeClosedIcon } from 'lucide-react';

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const { setRefresh } = useContext(UserContext);
  const router = useRouter();

  let formObj = {
    email: '',
    password: '',
  };

  const [formState, setFormState] = useState(formObj);
  const writeData = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.API_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const ctx = await res.json();
      if (res.ok) {
        toast.success(ctx.message);
        setRefresh((ctx) => !ctx);
        router.replace(ctx.redirect, { scroll: true });
      } else {
        toast.error(ctx.message);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-3xl lg:text-4xl">Bejelentkezés</h1>
        <p className="text-center text-base text-[#ff0000] lg:text-xl">Csak belsős tagok számára!</p>
      </div>
      <form className="text-bme-black dark:text-bme-white">
        <div>
          <p className="ml-2">Email</p>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="info@solarboatteam.hu"
            onChange={writeData}
            required
            className="bg-bme-lsecondary dark:bg-bme-dsecondary dark:border-bme-lsecondary/25 border-bme-dsecondary/10 inset-shadow-bme-dsecondary w-full rounded-lg border px-4 py-3 shadow-inner dark:inset-shadow-red-500"
          />
        </div>
        <br />
        <div>
          <p className="ml-2">Jelszó</p>
          <div className="relative">
            <input
              id="password"
              type={visible ? 'text' : 'password'}
              name="password"
              placeholder="password"
              onChange={writeData}
              required
              className="bg-bme-lsecondary dark:bg-bme-dsecondary dark:border-bme-lsecondary/25 border-bme-dsecondary/10 inset-shadow-bme-dsecondary w-full rounded-lg border px-4 py-3 shadow-inner dark:inset-shadow-red-500"
            />
            {visible ? (
              <EyeClosedIcon
                size={26}
                onClick={() => setVisible(!visible)}
                className="absolute top-3 right-3 cursor-pointer opacity-50"
              />
            ) : (
              <EyeIcon
                size={26}
                onClick={() => setVisible(!visible)}
                className="absolute top-3 right-3 cursor-pointer opacity-50"
              />
            )}
          </div>
        </div>
        <br />
        <button
          onClick={handleSubmit}
          className="bg-bme-dfront hover:bg-bme-dprimary dark:bg-bme-lprimary hover:dark:bg-bme-lsecondary text-bme-white dark:text-bme-black w-full cursor-pointer rounded-lg px-4 py-4 text-lg font-semibold transition-colors"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
