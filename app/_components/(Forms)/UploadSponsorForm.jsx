'use client';

import { useContext, useState } from 'react';
import { UserContext } from '../Providers/User-provider';
import { isAdmin } from '~/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const UploadSponsorForm = () => {
  const { user } = useContext(UserContext);
  const privileged = isAdmin(user);
  const token = Cookies.get('token');
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
    sName: '',
    sWebUrl: '',
    sCategory: '',
    sLogo: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const writeData = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormState((prev) => ({ ...prev, sLogo: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormState((prev) => ({ ...prev, sLogo: null }));
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.sLogo) {
      return toast.error('Please select an image file.');
    }

    const formData = new FormData();
    formData.append('sName', formState.sName);
    formData.append('sWebUrl', formState.sWebUrl);
    formData.append('sCategory', formState.sCategory);
    formData.append('sLogo', formState.sLogo);

    try {
      const res = await fetch('http://localhost:8080/api/sponsor/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        return toast.error(`Upload failed: ${res.statusText}`);
      }

      toast.success('Sponsor uploaded successfully!');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return privileged ? (
    <div className="z-9999">
      <Dialog className="z-9999" open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="cursor-pointer" onClick={() => setImagePreview(null)}>
            Új Szponzor Hozzáadása
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <form
            onSubmit={(e) => {
              wait().then(() => setOpen(false));
              handleSubmit(e);
            }}
            encType="multipart/form-data"
          >
            <DialogHeader>
              <DialogTitle>Szponzor Hozzáadása</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mb-4">Add meg a szponzornak az általános adatait.</DialogDescription>

            {/* Sponsor Name */}
            <div className="flex w-full flex-col justify-center gap-4">
              <label htmlFor="sName">Szponzor megnevezése</label>
              <Input onChange={writeData} name="sName" required defaultValue="" />

              {/* Sponsor Website */}
              <label htmlFor="sWebUrl">Szponzor weboldalának elérési útja</label>
              <Input onChange={writeData} name="sWebUrl" required defaultValue="" />
            </div>

            {/* Logo Upload */}
            <div className="relative my-4">
              <div className="hover:bg-bme-lfront hover:dark:bg-bme-dfront/20 flex w-full items-center justify-center rounded-lg transition-colors">
                <label
                  htmlFor="dropzone-file"
                  className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-px text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <code className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, SVG and WEBP only (max 5MB)
                    </code>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="sLogo"
                    accept="image/png, image/webp, image/jpeg, image/svg"
                    onChange={handleLogoChange}
                    required
                  />
                </label>
              </div>
            </div>
            {imagePreview && (
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer text-center text-xs italic opacity-50">
                  <p>
                    Kép megtekintése (hover)
                    <br />
                    <i className="opacity-50">Telefonos nézet nem elérhető!</i>
                  </p>
                </HoverCardTrigger>
                <HoverCardContent>
                  <img src={imagePreview} alt="Logo Preview" className="mx-auto w-auto rounded" />
                </HoverCardContent>
              </HoverCard>
            )}

            {/* Category Selection */}
            <div className="mt-4">
              <label className="text-bme-black dark:text-bme-white mb-2 block text-sm font-medium">
                Melyik kategóriába szeretnéd hozzáadni?
              </label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Válassz kategóriát" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gigawatt">Gigawatt</SelectItem>
                  <SelectItem value="megawatt">Megawatt</SelectItem>
                  <SelectItem value="kilowatt">Kilowatt</SelectItem>
                  <SelectItem value="bme">Budapesti Műszaki és Gazdaságtudományi Egyetem</SelectItem>
                  <SelectItem value="science">Tudományos partnerünk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter className={'mt-4'}>
              <Button type="submit" className="cursor-pointer">
                Hozzáadás
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  ) : null;
};

export default UploadSponsorForm;
