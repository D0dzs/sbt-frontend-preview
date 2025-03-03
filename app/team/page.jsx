import PageLayout from '../_components/(Layouts)/PageLayout';
import DisplayGroups from '../_components/(Team)/DisplayGroups';
import PriviligedControls from '../_components/(Team)/PriviligedControls';

export const metadata = {
  title: 'Csapatunk',
};

const Page = () => {
  return (
    <PageLayout className={'mx-auto grid w-full gap-16'}>
      <h1 className="pt-12 text-center text-xl lg:text-3xl">
        Ismerd meg a
        <span className="bg-linear-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text font-semibold text-transparent">
          {' '}
          csapatunkat
        </span>
        .
      </h1>

      <PriviligedControls />
      <DisplayGroups />
    </PageLayout>
  );
};

export default Page;
