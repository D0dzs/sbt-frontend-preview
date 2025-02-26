import Explanation from '../_components/(Dashboard)/Explanation';
import UserTable from '../_components/(Dashboard)/UserTable';
import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';

export const metadata = {
  title: 'Dashboard',
};

const Page = () => {
  return (
    <PageLayout className={'grid pt-(--navbar-height)'}>
      <SectionLayout className={'grid h-full gap-12 py-8 !select-none'}>
        <Explanation />
        <UserTable />
      </SectionLayout>
    </PageLayout>
  );
};

export default Page;
