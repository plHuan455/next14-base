// Filter valid colors => To resolve some warnings from Tailwind

export const extraColors = {
  primary: {
    DEFAULT: "hsl(var(--color-primary))",
  },
  secondary: {
    DEFAULT: "hsl(var(--color-secondary))",
  },
  foreground: {
    DEFAULT: "hsl(var(--color-foreground))",
  },
  background: {
    DEFAULT: "hsl(var(--color-background))",
  },
  default: {
    50: "hsl(var(--color-default-50))",
    200: "hsl(var(--color-default-200))",
    400: "hsl(var(--color-default-400))",
    DEFAULT: "hsl(var(--color-default))",
    700: "hsl(var(--color-default-700))",
    800: "hsl(var(--color-default-800))",
    900: "hsl(var(--color-default-900))",
  },
}
