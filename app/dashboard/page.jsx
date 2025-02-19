'use client';

import { redirect } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { isAdmin } from '~/lib/utils';
import Explanation from '../_components/(Dashboard)/Explanation';
import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';
import { UserContext } from '../_components/Providers/User-provider';
import UserTable from '../_components/(Dashboard)/UserTable';
import { mockUpUsrCount } from '~/lib/mockupData';

const validateToken = async () => {
  const response = await fetch('/api/auth/me', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  });

  const { valid } = await response.json();
  return valid;
};

const Page = () => {
  useEffect(() => {
    validateToken().then((valid) => {
      if (!valid) redirect('/');
    });
  }, []);

  const { user } = useContext(UserContext);
  const priviliged = isAdmin(user);
  if (!priviliged) return redirect('/');

  return (
    <PageLayout className={'grid pt-(--navbar-height)'}>
      <SectionLayout className={'grid gap-12 pt-8'}>
        <Explanation />
        <UserTable dataArray={mockUpUsrCount} />
      </SectionLayout>
    </PageLayout>
  );
};

export default Page;
