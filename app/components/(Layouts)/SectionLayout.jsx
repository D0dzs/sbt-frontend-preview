import { cn } from '~/lib/utils';

const SectionLayout = ({ className, children, ...props }) => {
  return (
    <div
      className={`${cn('flex w-screen items-center justify-center transition-all duration-75', className)}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionLayout;
