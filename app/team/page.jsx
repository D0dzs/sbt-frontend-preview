import { Separator } from '~/components/ui/separator';
import Container from '../_components/(Layouts)/Container';
import PageLayout from '../_components/(Layouts)/PageLayout';
import TeamContainer from '../_components/(Team)/TeamContainer';
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

      <Container className={'p-4 lg:p-6'}>
        <TeamContainer
          title={'Vezetőség'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl eget nisl.'
          }
        />
      </Container>

      <Container className={'p-4 lg:p-6'}>
        <h1 className="mb-4 text-xl lg:mb-8 lg:text-3xl">Gepeszet</h1>
        <p className="font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nunc nisl
          aliquet nisl, eget aliquam nisl nisl eget nisl.
        </p>
        {/* With Subgroups */}
        <div className="p-4">
          <div className="flex *:min-w-28 lg:gap-8">
            <div className="mb-2 flex flex-col items-center justify-center gap-2">
              <div className="relative p-2">
                <img
                  src="/images/team/Leader 1.jpg"
                  alt="Leader 1"
                  className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
                />
                <div className="dark:outline-bme-orange outline-bme-blue absolute top-0 left-0 h-full w-full rounded-full bg-transparent outline-2" />
              </div>
              <h2 className="text-lg font-bold">Leader 1</h2>
              <p className="text-sm opacity-50">Position</p>
            </div>
            <div className="mb-2 flex flex-col items-center justify-center gap-2">
              <img
                src="/images/team/Leader 2.jpg"
                alt="Leader 2"
                className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
              />
              <h2 className="text-lg font-bold">Leader 2</h2>
              <p className="text-sm opacity-50">Position</p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <Separator className="bg-bme-black/50 dark:bg-bme-white/50 h-[2px]" />
        </div>

        <div className="p-4">
          <div className="flex *:min-w-28 lg:gap-8">
            <div className="mb-2 flex flex-col items-center justify-center gap-2">
              <div className="relative p-2">
                <img
                  src="/images/team/Leader 1.jpg"
                  alt="Leader 1"
                  className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
                />
                <div className="dark:outline-bme-orange outline-bme-blue absolute top-0 left-0 h-full w-full rounded-full bg-transparent outline-2" />
              </div>
              <h2 className="text-lg font-bold">Leader 4</h2>
              <p className="text-sm opacity-50">Position</p>
            </div>
            <div className="mb-2 flex flex-col items-center justify-center gap-2">
              <img
                src="/images/team/Leader 2.jpg"
                alt="Leader 2"
                className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
              />
              <h2 className="text-lg font-bold">Leader 5</h2>
              <p className="text-sm opacity-50">Position</p>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};

export default Page;
