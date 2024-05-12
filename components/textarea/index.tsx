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
        16: "py-[14px] px-6 text-[1rem] leading-[24px]",
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
      size: 16,
      variant: "solid",
      rounded: "lg",
    },
  },
  {
    responsiveVariants: ["sm", "md", "lg"],
  },
)

export interface TextareaProps
  extends VariantProps<typeof variants>,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  className?: string
  wrapperProps?: Partial<React.HTMLAttributes<HTMLDivElement>>
}

const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>(
  ({ font, size, variant, className, wrapperProps, ...props }, ref) => {
    return (
      <div {...wrapperProps} className={cn(wrapperProps?.className, className)} ref={ref}>
        <textarea className={cn("block w-full", variants({ size, font, variant }), className)} {...props} />
      </div>
    )
  },
)

Textarea.displayName = "Textarea"

export default Textarea
