"use client";

import { CSSVariablesResolver, createTheme, defaultVariantColorsResolver, VariantColorsResolver } from "@mantine/core";
import '@fontsource/tajawal/300.css';
import '@fontsource/tajawal/400.css';
import '@fontsource/tajawal/500.css';
import '@fontsource/tajawal/700.css';


const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  if (input.variant === 'primary') {
    return {
      background: 'var(--mantine-primary-color)',
      hover: 'var(--mantine-hover-color)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  if (input.variant === 'primaryGradient') {
    return {
      background: 'var(--mantine-primary-gradient)',
      hover: 'var(--mantine-hover-gradient)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};


export const theme = createTheme({
  variantColorResolver: variantColorResolver,
  fontFamily: "Tajawal, sans-serif",
  colors: {
    'lamah': ['#E7F7FE', '#C4EBFB', '#A2DFF8', '#81D2F4', '#61C5EE', '#42B7E8', '#24A9E1', '#198FC1', '#10749E', '#09587A'],
  },
  primaryColor: 'lamah',
  other: {
    normalGradient: "linear-gradient(58deg, rgba(36,169,225,1) 10%, rgba(5,46,64,1) 180%);",
    hoverGradient: "linear-gradient(58deg, rgba(40,137,179,1) 10%, rgba(5,46,64,1) 180%);",
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-primary-color': theme.colors.lamah[6],
    '--mantine-hover-color': theme.colors.lamah[7],
    '--mantine-primary-gradient': theme.other.normalGradient,
    '--mantine-hover-gradient': theme.other.hoverGradient,
  },
  light: {},
  dark: {},
});