import { CubeIcon } from '@phosphor-icons/react'

type Variant = "default" | "primary" | "background"

const variantClass: Record<Variant, string> = {
  default:    "text-primary",
  primary:    "bg-primary text-background px-3 py-1",
  background: "bg-background/50 backdrop-blur-xl text-background px-3 py-1",
}

const iconClass: Record<Variant, string> = {
  default:    "text-primary",
  primary:    "text-background",
  background: "text-background",
}

const Crumb = ({
  value,
  className,
  variant = "default"
} : {
  value?: string,
  className?: string,
  variant?: Variant
}) => {
  return (
    <div className={`${className} ${variantClass[variant]} flex items-center gap-x-1 font-medium w-fit`}>
      <CubeIcon className={iconClass[variant]} weight='fill' size={12}/>
      <p>{value}</p>
    </div>
  )
}

export default Crumb
