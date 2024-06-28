import { defineSlotRecipe } from "@pandacss/dev";

export const iconsRecipe = defineSlotRecipe({
  className: "icons",
  slots: ["root"],
  base: {
    root: {
      bg: "black",
      color: "white",
      maxW: "32",
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          h: "12",
          w: "12",
        },
      },
      sm: {
        root: {
          h: "14",
          w: "14",
        },
      },
      md: {
        root: {
          w: "16",
          h: "16",
        },
      },
      lg: {
        root: {
          h: "20",
          w: "20",
        },
      },
      xl: {
        root: {
          h: "24",
          w: "24",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
