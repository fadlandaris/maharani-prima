"use client"

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import React from "react";

type Variant = "primary" | "background" | "foreground" | "secondary" | "tertiary";

const variantClass: Record<Variant, string> = {
  primary: "bg-primary text-background",
  secondary: "bg-secondary text-background",
  tertiary: "bg-tertiary text-background",
  background: "bg-background text-foreground",
  foreground: "bg-foreground text-background",
};

const Button = ({
  value,
  variant = "primary",
  className,
  Icon = ArrowUpRightIcon,
  onClick,
}: {
  value: string;
  variant?: Variant;
  className?: string;
  Icon?: React.ComponentType,
  onClick?: ()=> void
}) => {
  return (
    <button onClick={onClick} className={`${variantClass[variant]} ${className ?? ""} text-sm hover:opacity-70 cursor-pointer transition-all duration-500 hover:gap-x-12 py-2 px-4 font-semibold flex items-center gap-x-6`}>
      {value}
      <Icon weight="bold" size={16} />
    </button>
  );
};

export default Button;
