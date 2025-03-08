import PageLayout from '../_components/(Layouts)/PageLayout';
import TeamPageContent from '../_components/(Team)/TeamPageContent';

export const metadata = {
  title: 'Csapatunk',
  description: 'Ismerd meg a csapatunkat.',
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

      <TeamPageContent />
    </PageLayout>
  );
};

export default Page;
