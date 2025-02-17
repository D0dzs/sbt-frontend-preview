'use client';

import { BadgeInfoIcon, ShieldAlertIcon, TriangleAlertIcon } from 'lucide-react';
import Container from '../Container';
import { useContext } from 'react';
import { MobileContext } from '../Providers/Screen-provider';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Separator } from '~/components/ui/separator';
import { Button } from '~/components/ui/button';

const Explanation = () => {
  const isMobile = useContext(MobileContext);

  return isMobile ? (
    <div className="flex w-full flex-col items-center gap-12">
      <Dialog>
        <DialogTrigger>
          <Container className={'flex min-w-[80vw] gap-3 px-8 py-4'}>
            <BadgeInfoIcon size={24} className="stroke-bme-blue dark:stroke-bme-orange" />
            <p className="self-center text-sm">Magyarázatért kattints ide!</p>
          </Container>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="text-bme-blue dark:text-bme-orange text-2xl">Magyarázat</p>
              <div className="my-4 px-6">
                <Separator />
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="flex flex-col gap-12 text-left">
            <div>
              <h3 className="text-bme-black dark:text-bme-white text-2xl">Role</h3>
              <p>
                Legördülő menü fog megjelenni, és onnan lehet kiválasztani, hogy <b>„Admin”</b> vagy <b>„Writer”</b> az
                adott illető.
              </p>
            </div>
            <div>
              <h3 className="text-bme-black dark:text-bme-white text-2xl">Jelszó módosítás</h3>
              <span className="text-bme-blue dark:text-bme-orange text-xs font-semibold">
                Az új jelszó eljuttatása az Admin kötelessége!
              </span>
              <p>A menüben szerepelni fog az illető:</p>
              <ul className="list-inside">
                <li>
                  -<b> neve</b> <i className="opacity-50">(nem lehet módosítani)</i>
                </li>
                <li>
                  -<b> e-mail címe</b> <i className="opacity-50">(nem lehet módosítani)</i>
                </li>
                <li>
                  -<b> két mező, ahol az új jelszót kell megadni.</b>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-bme-black dark:text-bme-white text-2xl">Aktív-Inaktív</h3>
              <p>
                Meg fog jelenni egy ablak, amelyben <b>„Igen”</b>-nel és <b>„Nem”</b>-mel lehet eldönteni, hogy aktív
                vagy inaktív legyen a tag.
              </p>
              <br />
              <p className="italic opacity-50">
                (Amennyiben inaktív, a tag nem fog tudni bejelentkezni a kezelőfelületre!)
              </p>
            </div>
          </DialogDescription>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" className="bg-bme-blue dark:bg-bme-orange text-bme-white dark:text-bme-black">
                Bezárás
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Container className={'flex max-w-[80vw] gap-3 px-8 py-4 !outline-1 !outline-[#FF0000]'}>
        <TriangleAlertIcon size={32} className="self-center stroke-[#FF0000]" />
        <p className="w-full text-justify text-sm">
          A teljes felhasználói élmény érdekében asztali verzión ajánlott használni!
        </p>
      </Container>
    </div>
  ) : (
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
              Legördülő menü fog megjelenni, és onnan lehet kiválasztani, hogy <b>„Admin”</b> vagy <b>„Writer”</b> az
              adott illető.
            </p>
          </div>
          <div className="w-1/3 p-4">
            <h1 className="text-xl font-semibold">Jelszó módosítás</h1>
            <h2 className="text-bme-blue dark:text-bme-orange text-sm font-bold">
              Az új jelszó eljuttatása az Admin kötelessége!
            </h2>
            <br />
            <h3>A menüben szerepelni fog az illető:</h3>
            <ul className="list-inside">
              <li>
                -<b> neve</b> <i className="opacity-50">(nem lehet módosítani)</i>
              </li>
              <li>
                -<b> e-mail címe</b> <i className="opacity-50">(nem lehet módosítani)</i>
              </li>
              <li>
                -<b> két mező, ahol az új jelszót kell megadni.</b>
              </li>
            </ul>
          </div>
          <div className="w-1/3 p-4">
            <h1 className="text-xl font-semibold">Aktív-Inaktív</h1>
            <p>
              Meg fog jelenni egy ablak, amelyben <b>„Igen”</b>-nel és <b>„Nem”</b>-mel lehet eldönteni, hogy aktív vagy
              inaktív legyen a tag.
            </p>
            <br />
            <p className="italic opacity-50">
              (Amennyiben inaktív, a tag nem fog tudni bejelentkezni a kezelőfelületre!)
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Explanation;
