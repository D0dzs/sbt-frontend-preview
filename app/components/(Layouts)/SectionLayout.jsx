import { cn } from "~/lib/utils"

const SectionLayout = ({ children, className }) => {
  return (
    <div className={`${cn('p-12', className)}`}>
        {children}
    </div>
  )
}

export default SectionLayout