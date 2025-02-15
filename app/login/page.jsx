import Link from 'next/link';
import LoginForm from '../_components/(Auth)/LoginForm';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

const Page = () => {
  const token = Cookies.get('token');
  const verifyToken = async (token) => {
    if (!token) return;

    const response = await fetch('http://localhost:8080/api/auth/verify-token', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) return { redirect: '/' };
  };

  const tokenVerificationResult = verifyToken(token);
  if (tokenVerificationResult && tokenVerificationResult.redirect) {
    redirect(tokenVerificationResult.redirect);
  }

  return (
    <div className={'text-bme-black dark:text-bme-white relative grid grid-flow-col overflow-hidden lg:grid-cols-2'}>
      <div className="relative hidden h-screen bg-[url(/login.webp)] bg-cover bg-center bg-no-repeat lg:block">
        <svg
          width="167"
          height="1318"
          viewBox="-50 0 167 1318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            filter="url(#filter0_d_100_164)"
            d="M83.5 -119L74.5834 -45.4117C65.6667 27.0783 47.8333 174.255 56.75 320.333C65.6667 466.412 101.333 613.588 101.333 759.667C101.333 905.745 65.6666 1052.92 47.8333 1125.41L29.9999 1199L137 1199L137 1125.41C137 1052.92 137 905.745 137 759.667C137 613.588 137 466.412 137 320.333C137 174.255 137 27.0783 137 -45.4117L137 -119L83.5 -119Z"
            className={`dark:fill-bme-dprimary fill-bme-lprimary`}
          />
          <defs>
            <filter
              id="filter0_d_100_164"
              x="0"
              y="-149"
              width="167"
              height="1378"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_100_164" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_100_164" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="bg-bme-lprimary dark:bg-bme-dprimary z-50 flex h-screen items-center justify-center">
        <div className="flex w-2/4 flex-col gap-12">
          <LoginForm />
        </div>
      </div>
      <Link
        href={'/'}
        className="text-bme-blue dark:text-bme-orange absolute -right-px bottom-0 z-55 p-8 font-semibold"
      >
        &lt; Vissza a főoldalra
      </Link>
    </div>
  );
};

export default Page;
