import { cn } from "lib/utils/cn"

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Section: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <section className={cn("t-section relative", className)} {...props}>
      {children}
    </section>
  )
}

export default Section
