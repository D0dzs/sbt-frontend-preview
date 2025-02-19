'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'sonner';
import { UserContext } from '../Providers/User-provider';

const LoginForm = () => {
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
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const ctx = await res.json();
      if (res.status !== 200) {
        const message = ctx.message ?? ctx.errors[0] ?? 'Unknown error';
        toast.error(message);
      } else {
        const token = ctx.token;
        const refreshToken = ctx.refreshToken;
        Cookies.set('token', token, { secure: true, sameSite: 'strict' });
        Cookies.set('refreshToken', refreshToken, { secure: true, sameSite: 'strict' });
        toast.success(ctx.message);
        router.push('/');
        setRefresh((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
      toast.error('Hiba történt a bejelentkezés során!');
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
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={writeData}
            required
            className="bg-bme-lsecondary dark:bg-bme-dsecondary dark:border-bme-lsecondary/25 border-bme-dsecondary/10 inset-shadow-bme-dsecondary w-full rounded-lg border px-4 py-3 shadow-inner dark:inset-shadow-red-500"
          />
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
