import Navbar from '../Navbar';
import Footer from '../Footer';
import { cn } from '~/lib/utils';

const PageLayout = ({ children, className, ...props }) => {
  return (
    <>
      <Navbar className={'fixed z-20 mt-0 w-full lg:mt-6'} />
      <div className={`${cn('pt-(--navbar-height)', className)}`} {...props}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
