'use client';

import { redirect } from 'next/navigation';
import { useContext } from 'react';
import { isAdmin } from '~/lib/utils';
import Explanation from '../_components/(Dashboard)/Explanation';
import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';
import { UserContext } from '../_components/Providers/User-provider';
import UserTable from '../_components/(Dashboard)/UserTable';
import { mockUpUsrCount } from '~/lib/mockupData';

const Page = () => {
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
