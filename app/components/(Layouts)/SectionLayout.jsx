import { cn } from '~/lib/utils';

const SectionLayout = ({ className, children, ...props }) => {
  return (
    <div className={`${cn('', className)}`} {...props}>
      {children}
    </div>
  );
};

export default SectionLayout;
