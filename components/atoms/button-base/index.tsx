import React from "react"
import { type VariantProps, tv } from "tailwind-variants"

import { cn } from "lib/utils/cn"

export const buttonBaseVariants = tv(
  {
    base: "a-button flex items-center justify-center [&:not(:disabled)]:active:opacity-[0.92] relative font-content rounded-full duration-200 whitespace-nowrap leading-normal active:scale-[0.98] disabled:active:scale-100",
    variants: {
      color: {
        primary: "bg-primary hover:bg-primary/90 text-white",
        secondary: "bg-secondary text-white",
        default: "bg-default",
        black: "bg-black hover:bg-default-700 text-white",
      },
      size: {
        56: "h-[56px] px-8 text-[18px]",
        48: "h-12 px-6 text-[1rem]",
        40: "h-10 px-4",
      },
      variant: {
        text: "bg-transparent",
        default: "",
      },
      isIconOnly: {
        true: "aspect-square w-auto p-0",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "text",
        color: "default",
        className: "hover:bg-default-200",
      },
      {
        variant: "text",
        color: "black",
        className: "text-black hover:text-white",
      },
    ],
    defaultVariants: {
      color: "primary",
      isIconOnly: false,
      size: 56,
      variant: "default",
    },
  },
  {
    responsiveVariants: ["sm", "md", "lg"],
  },
)

export interface ButtonBaseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonBaseVariants> {
  as?: React.ElementType
}

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ className, as = "button", children, isIconOnly, variant, color, size, disabled, ...props }, ref) => {
    const Component = as
    return (
      <Component
        className={cn(buttonBaseVariants({ size, color, variant, isIconOnly }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {/* LABEL */}
        {children}
      </Component>
    )
  },
)

ButtonBase.displayName = "ButtonBase"

export { ButtonBase }
