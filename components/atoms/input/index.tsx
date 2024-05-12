import React from "react"
import { type VariantProps, tv } from "tailwind-variants"

import { cn } from "lib/utils/cn"

const variants = tv(
  {
    base: "a-input outline-none font-content leading-[100%]",
    variants: {
      font: {
        content: "font-content",
      },
      size: {
        52: "h-[52px] px-6 py-[14px]",
        40: "h-10 px-6 text-[1rem]",
        16: "text-[1rem] leading-[20px]",
      },
      variant: {
        solid: "ring-[1px] ring-foreground",
      },
      rounded: {
        lg: "rounded-[20px]",
      },
    },
    defaultVariants: {
      font: "content",
      size: 52,
      variant: "solid",
      rounded: "lg",
    },
  },
  {
    responsiveVariants: ["sm", "md", "lg"],
  },
)

export interface InputProps
  extends VariantProps<typeof variants>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string
  wrapperProps?: Partial<React.HTMLAttributes<HTMLDivElement>>
}

const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ font, size, variant, className, wrapperProps, ...props }, ref) => {
    return (
      <div {...wrapperProps} className={cn(wrapperProps?.className, className)} ref={ref}>
        <input className={cn("block w-full", variants({ size, font, variant }), className)} {...props} />
      </div>
    )
  },
)

Input.displayName = "Input"

export default Input
