'use client';

import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';
import { useContext } from 'react';
import { UserContext } from '../_components/Providers/User-provider';
import { isAdmin } from '~/lib/utils';
import { redirect } from 'next/navigation';
import Explanation from '../_components/(Dashboard)/Explanation';
import Footer from '../_components/Footer';

const Page = () => {
  const { user } = useContext(UserContext);
  const priviliged = isAdmin(user);
  if (!priviliged) return redirect('/');

  return (
    <PageLayout className={'grid pt-(--navbar-height)'}>
      <SectionLayout className={'pt-8'}>
        <Explanation />
      </SectionLayout>
    </PageLayout>
  );
};

export default Page;
