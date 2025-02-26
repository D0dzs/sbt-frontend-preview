import Image from 'next/image';
import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';
import SponsorCard from '../_components/(Sponsor)/SponsorCard';
import Link from 'next/link';
import UploadSponsorForm from '../_components/(Forms)/UploadSponsorForm';

export const metadata = {
  title: 'Szponzorok',
};

const Page = () => {
  return (
    <PageLayout className={'overflow-x-clip'}>
      {/* GIGAWATT SPONSORS */}
      <SectionLayout
        className={
          'relative grid min-h-screen items-start bg-[url(/images/sponsors/gigawatt_background.webp)] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]'
        }
      >
        <div className="to-bme-lprimary dark:to-bme-dprimary absolute z-5 h-full w-full translate-y-px rotate-180 bg-gradient-to-t from-70% to-90%" />
        <div className="z-10 flex h-svh flex-col items-center justify-center lg:gap-16 lg:pt-0">
          <UploadSponsorForm />

          <h3 className="text-center text-2xl font-semibold lg:text-5xl">GIGAWATT Szponzorok</h3>
          <div className="grid h-fit gap-4 p-8 lg:grid-cols-3 lg:gap-8">
            <SponsorCard
              sponsorURL={'https://mvm.hu/'}
              sponsorName={'MVM'}
              sponsorImage={'/images/sponsors/gigawatt/MVM.svg'}
              imageClassName={'h-18'}
            />
            <SponsorCard
              sponsorURL={'https://www.polinvent.com/'}
              sponsorName={'Polinvent'}
              sponsorImage={'/images/sponsors/gigawatt/Polinvent.svg'}
              imageClassName={'h-18'}
            />
            <SponsorCard
              sponsorURL={'https://www.hds.bme.hu/'}
              sponsorName={'HRT'}
              sponsorImage={'/images/sponsors/gigawatt/HRT.svg'}
              imageClassName={'h-18'}
            />
          </div>
        </div>
      </SectionLayout>

      {/* MEGAWATT SPONSORS */}
      <SectionLayout
        className={
          'relative mt-24 grid min-h-screen items-start bg-[url(/images/sponsors/megawatt_background.webp)] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]'
        }
      >
        <div className="z-10 mx-auto flex w-full flex-col lg:my-auto lg:w-[70vw] lg:gap-16">
          <h3 className="text-center text-2xl font-semibold lg:text-5xl">MEGAWATT Szponzorok</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            <SponsorCard
              sponsorURL={'https://www.foxconn.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Foxconn'}
              sponsorImage={'/images/sponsors/megawatt/Foxconn.svg'}
            />
            <SponsorCard
              sponsorURL={'https://boatshow.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Boatshow'}
              sponsorImage={'/images/sponsors/megawatt/Boatshow.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.dasweltauto.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Das WeltAuto'}
              sponsorImage={'/images/sponsors/megawatt/Das_WeltAuto.svg'}
            />
            <SponsorCard
              sponsorURL={'https://kontron.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Kontron'}
              // TODO: change this image to the correct one
              sponsorImage={'/images/sponsors/megawatt/s&t.svg'}
            />
            <SponsorCard
              sponsorURL={'https://easturn.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Easturn'}
              sponsorImage={'/images/sponsors/megawatt/easturn.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.varinex.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Varinex'}
              sponsorImage={'/images/sponsors/megawatt/Varinex.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.helukabel.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Helukabel'}
              sponsorImage={'/images/sponsors/megawatt/Helukabel.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.festool.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Festool'}
              sponsorImage={'/images/sponsors/megawatt/Festool.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.porschehungaria.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Porsche Hungaria'}
              sponsorImage={'/images/sponsors/megawatt/Porsche.svg'}
            />
            <SponsorCard
              sponsorURL={'https://zoltek.com/'}
              imageClassName={'h-10'}
              sponsorName={'Zoltek'}
              sponsorImage={'/images/sponsors/megawatt/Zoltek.svg'}
            />
          </div>
        </div>
      </SectionLayout>

      {/* KILOWATT SPONSORS */}
      <SectionLayout
        className={
          'relative mt-24 grid min-h-screen items-start bg-[url(/images/sponsors/kilowatt_background.webp)] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]'
        }
      >
        <div className="z-10 mx-auto flex w-full flex-col lg:my-auto lg:w-[70vw] lg:gap-16">
          <h3 className="text-center text-2xl font-semibold lg:text-5xl">KILOWATT Szponzorok</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            <SponsorCard
              sponsorURL={'https://www.wago.com/global/'}
              imageClassName={'h-10'}
              sponsorName={'Wago'}
              sponsorImage={'/images/sponsors/kilowatt/wago.svg'}
            />
            <SponsorCard
              sponsorURL={'https://autopro.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Autopro'}
              sponsorImage={'/images/sponsors/kilowatt/autopro.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.mgm-controllers.com/'}
              imageClassName={'h-10'}
              sponsorName={'MGM Controllers'}
              sponsorImage={'/images/sponsors/kilowatt/mgm_controllers.svg'}
            />
            <SponsorCard
              sponsorURL={'https://fiber.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Fiber'}
              sponsorImage={'/images/sponsors/kilowatt/fiber.svg'}
            />
            <SponsorCard
              sponsorURL={''}
              imageClassName={'h-10'}
              sponsorName={'N/A'}
              sponsorImage={'/images/sponsors/placeholder.svg'}
            />
            <SponsorCard
              sponsorURL={''}
              imageClassName={'h-10'}
              sponsorName={'N/A'}
              sponsorImage={'/images/sponsors/placeholder.svg'}
            />
            <SponsorCard
              sponsorURL={''}
              imageClassName={'h-10'}
              sponsorName={'Gross'}
              sponsorImage={'/images/sponsors/kilowatt/gross.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.sensata.com/gigavac-redirect'}
              imageClassName={'h-10'}
              sponsorName={'Gigavac'}
              sponsorImage={'/images/sponsors/kilowatt/gigavac.svg'}
            />
            <SponsorCard
              sponsorURL={'https://grobelox.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Grobelox'}
              sponsorImage={'/images/sponsors/kilowatt/grobelox.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.gurit.com/'}
              imageClassName={'h-10'}
              sponsorName={'Gurit'}
              sponsorImage={'/images/sponsors/kilowatt/gurit.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.harting.com/'}
              imageClassName={'h-10'}
              sponsorName={'Harting'}
              sponsorImage={'/images/sponsors/kilowatt/harting.svg'}
            />
            <SponsorCard
              sponsorURL={'https://www.henkel.hu/'}
              imageClassName={'h-10'}
              sponsorName={'Henkel'}
              sponsorImage={'/images/sponsors/kilowatt/henkel.svg'}
            />
          </div>
        </div>
      </SectionLayout>

      {/* BME SPONSORS */}
      <SectionLayout
        className={
          'just relative grid min-h-screen items-start bg-[url(/images/sponsors/special_background.webp)] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]'
        }
      >
        <div className="to-bme-lprimary dark:to-bme-dprimary absolute z-5 h-full w-full translate-y-px rotate-180 bg-gradient-to-t from-70% to-90%" />
        <div className="z-10 mx-auto w-screen justify-center gap-16 lg:w-[60vw]">
          <div>
            <h3 className="mt-24 p-4 text-center text-2xl font-semibold lg:mt-0 lg:p-0 lg:text-5xl">
              Budapesti Műszaki és Gazdaságtudományi Egyetem
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 p-8">
              <SponsorCard
                sponsorURL={'https://manuf.bme.hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'BME Gyártástudomány és -technológia Tanszék'}
                sponsorImage={'/images/sponsors/bme/gtt.svg'}
              />
              <SponsorCard
                sponsorURL={'https://att.bme.hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'Anyagtudomány és technológia Tanszék'}
                sponsorImage={'/images/sponsors/bme/att.svg'}
              />
              <SponsorCard
                sponsorURL={'https://www.aut.bme.hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'Automatizálási és Alkalmazott Informatikai Tanszék'}
                sponsorImage={'/images/sponsors/bme/aut.svg'}
              />
              <SponsorCard
                sponsorURL={'http://ehk.bme.hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'Egyetemi Hallgatói Képviselet'}
                sponsorImage={'/images/sponsors/bme/ehk.svg'}
              />
              <SponsorCard
                sponsorURL={'https://gpk.bme.hu/hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'Gépészmérnöki Kar'}
                sponsorImage={'/images/sponsors/bme/gpk.svg'}
              />
              <SponsorCard
                sponsorURL={'https://gt3.bme.hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'Gép- és Terméktervezés Tanszék'}
                sponsorImage={'/images/sponsors/bme/gt3.svg'}
              />
              <SponsorCard
                sponsorURL={'http://ehk.bme.hu/'}
                imageClassName={'h-18 w-full'}
                sponsorName={'Egyetemi Hallgatói Képviselet'}
                sponsorImage={'/images/sponsors/bme/ehk2.svg'}
              />
            </div>
          </div>
        </div>

        {/* SCIENCE PARTNER */}
        <div className="z-15 mx-auto flex flex-col items-center justify-center">
          <h3 className="self-end text-center text-2xl font-semibold lg:text-5xl">Tudományos partnerünk</h3>
          <div className="flex h-fit w-fit items-center justify-center p-8">
            <SponsorCard
              sponsorURL={'https://www.ek.hun-ren.hu/'}
              imageClassName={'h-24 w-48'}
              className={'w-96'}
              sponsorName={'HUN-REN Energiatudományi Kutatóközpont'}
              sponsorImage={'/images/sponsors/science/hun-ren.svg'}
            />
          </div>
        </div>
      </SectionLayout>

      {/* BME */}
      <div className="mt-16 flex items-center justify-center p-8 lg:p-0">
        <Link href="https://www.bme.hu/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/sponsors/bme_logo_light.svg"
            width={350}
            height={1}
            className="hidden lg:w-[500px] dark:block"
            alt="Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)"
          />
          <Image
            src="/images/sponsors/bme_logo_dark.svg"
            width={350}
            height={1}
            className="block lg:w-[500px] dark:hidden"
            alt="Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)"
          />
        </Link>
      </div>
    </PageLayout>
  );
};

export default Page;
