import { sage } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      backgroundSurface: sage.sage2,
      background: sage.sage1,
      backgroundElement: sage.sage12,
      backgroundElementHovered: sage.sage11,
      backgroundElementActive: sage.sage10,
      borderSubtle: sage.sage6,
      borderElement: sage.sage7,
      borderElementHovered: sage.sage8,
      textLowConstrast: sage.sage11,
      textHighContrast: sage.sage12,
      textWhite: "white",
    },
    radii: {
      none: "0px",
      s: "4px",
      m: "8px",
      l: "16px",
    },
    space: {
      none: "0px",
      xs: "8px",
      s: "16px",
      m: "32px",
      l: "64px",
      xl: "128px",
    },
    borderWidths: {
      s: "1px",
      m: "3px",
    },
    shadows: {
      focused: "0 0 0 $borderWidths$m $colors$borderElement",
    },
    fontSizes: {
      s: "12px",
      m: "16px",
      l: "32px",
      xl: "64px",
    },
    fontWeights: {
      light: 200,
      normal: 400,
      heavy: 600,
    },
  },
  utils: {
    m: (value: Stitches.PropertyValue<"margin">) => ({ margin: value }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({ padding: value }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
  },
});
