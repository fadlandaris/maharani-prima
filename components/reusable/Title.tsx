"use client"

import Crumb from './Crumb'

type Variant = "foreground" | "background"

const variantClass: Record<Variant, string> = {
  foreground: "text-foreground",
  background: "text-background",
}

const Title = ({
  value,
  className,
  crumb,
  crumbVariant,
  variant = "foreground"
} : {
  value: string,
  className?: string,
  crumb?: string,
  crumbVariant?: "default" | "primary" | "background",
  variant?: Variant
}) => {
  return (
    <div className={`${className} space-y-8`}>
      <Crumb value={crumb} variant={crumbVariant}/>
      <h3 className={`text-5xl font-medium tracking-tighter max-w-3xl ${variantClass[variant]}`}>{value}</h3>
    </div>
  )
}

export default Title
