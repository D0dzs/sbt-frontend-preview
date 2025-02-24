'use client';

import { useContext, useState } from 'react';
import { cn, isAdmin } from '~/lib/utils';
import DesktopNavbar from './DesktopNavbar';
import MobileLinks from './MobileLinks';
import MobileNavbar from './MobileNavbar';
import { MobileContext } from './Providers/Screen-provider';
import { UserContext } from './Providers/User-provider';

const Navbar = ({ className, ...props }) => {
  const { logout, user } = useContext(UserContext);
  const isMobile = useContext(MobileContext);
  const privileged = isAdmin(user);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className={`${cn('absolute top-0 left-0 z-9999 flex w-full justify-center', className)}`} {...props}>
      {isMobile ? (
        <MobileLinks
          isOpen={isOpen}
          handleToggle={handleToggle}
          user={user}
          handleLogout={logout}
          privileged={privileged}
        />
      ) : null}
      <div className="outline-bme-dsecondary/15 dark:outline-bme-lsecondary/15 shadow-bme-black/5 lg:shadow-bme-black/20 dark:shadow-bme-white/5 lg:dark:outline-bme-lsecondary/50 bg-bme-lprimary dark:bg-bme-dprimary lg:from-bme-white/50 lg:to-bme-white/30 grid h-20 w-screen items-center rounded-none px-4 shadow-lg outline-2 backdrop-blur-sm transition-all duration-75 lg:w-fit lg:rounded-full lg:bg-transparent lg:bg-linear-to-t lg:px-8 xl:w-[60vw] lg:dark:bg-transparent">
        {isMobile ? (
          <MobileNavbar handleToggle={handleToggle} />
        ) : (
          <DesktopNavbar handleLogout={logout} privileged={privileged} user={user} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
