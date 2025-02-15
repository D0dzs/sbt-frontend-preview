'use client';

import { ShieldAlertIcon } from 'lucide-react';
import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';
import Container from '../_components/Container';
import { useContext } from 'react';
import { UserContext } from '../_components/Providers/User-provider';
import { isAdmin } from '~/lib/utils';
import { redirect } from 'next/navigation';

const Page = () => {
  const { user } = useContext(UserContext);
  const priviliged = isAdmin(user);
  if (!priviliged) return redirect('/');

  return (
    <PageLayout className={'grid pt-(--navbar-height)'}>
      <SectionLayout className={'pt-8'}>
        <Container className={'w-[60vw] p-4 select-none'}>
          <div className="mx-auto mb-4 flex w-fit justify-center gap-3">
            <ShieldAlertIcon size={20} className="stroke-bme-blue dark:stroke-bme-orange lg:h-10 lg:w-10" />
            <p className="text-xl lg:text-3xl">Magyarázat</p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="w-1/3 p-4">
                <h1 className="text-xl font-semibold">Role</h1>
                <p>
                  Legördülő menü fog megjelenni, és onnan lehet kiválasztani, hogy „Admin” vagy „Writer” az adott
                  illető.
                </p>
              </div>
              <div className="w-1/3 p-4">
                <h1 className="text-xl font-semibold">Jelszó módosítás</h1>
                <h2 className="text-base font-bold text-[#FF0000]">Az új jelszó eljuttatása az Admin kötelessége!</h2>
                <br />
                <h3>A menüben szerepelni fog az illető:</h3>
                <ul className="font-extralight italic">
                  <li>- neve (nem módosítható);</li>
                  <li>- e-mail címe (nem módosítható);</li>
                  <li>- két mező, ahol az új jelszót kell megadni.</li>
                </ul>
              </div>
              <div className="w-1/3 p-4">
                <h1 className="text-xl font-semibold">Aktív-Inaktív</h1>
                <p>
                  Meg fog jelenni egy ablak, amelyben „Igen”-nel és „Nem”-mel lehet eldönteni, hogy aktív vagy inaktív
                  legyen a tag.
                </p>
                <br />
                <p className="italic">(inaktív tag nem tud majd bejelentkezni)</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionLayout>
    </PageLayout>
  );
};

export default Page;
