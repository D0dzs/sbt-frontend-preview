import { mockUpUsrCount } from '~/lib/mockupData';
import Explanation from '../_components/(Dashboard)/Explanation';
import UserTable from '../_components/(Dashboard)/UserTable';
import PageLayout from '../_components/(Layouts)/PageLayout';
import ProtectedRoute from '../_components/Providers/ProtectedRoute';
import SectionLayout from '../_components/(Layouts)/SectionLayout';

const Page = () => {
  return (
    <ProtectedRoute>
      <PageLayout className={'grid pt-(--navbar-height)'}>
        <SectionLayout className={'grid h-full gap-12 py-8'}>
          <Explanation />
          <UserTable dataArray={mockUpUsrCount} />
        </SectionLayout>
      </PageLayout>
    </ProtectedRoute>
  );
};

export default Page;
