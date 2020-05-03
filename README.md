# SASS Farbig

## Introduction

SASS Farbig is an [HCL color space](https://en.wikipedia.org/wiki/HCL_color_space) based SASS lib to help generate color palettes for use in design systems and applications based on any input color. The aim is to create light and dark theme palettes that provide WCAG compliant contrast ratios of at least 4.5:1 for readability.

SASS Farbig provides the basic SASS functions for palette generation and allows for overriding the default chroma and luminance curves as well as the light and dark text colors.

All color calculations were ported directly from [chroma.js](https://vis4.net/chromajs/)

## How to use

### Basic usage
First import the project:
```shell script
yarn add sass-farbig
```

Then add the SASS import:
```sass
@import '~sass-farbig/farbig';
```

And generate a palette for a given base color:
```sass
$color: #6c29d4;
$palette: generate-palette($color);
```

This will output the following palette map:
```sass
$palette = (
  l5: #f6e9ff,
  l4: #ebd4ff,
  l3: #ddbcfe,
  l2: #cba1fa,
  l1: #b683f3,
  default: #9c64e5,
  d1: #7f50ba,
  d2: #644190,
  d3: #4d346b,
  d4: #39294c,
  d5: #292033,
);
```

The neutral (grayscale) palette map can be generated by calling:
```
$neutral-palette: neutral-palette();
```

Use the ```generate-color-classes``` mixin to generate classes for each step:
```sass
$prefix: 'app-primary';
$color: #6c29d4;
$palette: generate-palette($color);
@include generate-color-classes($prefix, $palette);
```

This will generate classes for colors and background colors e.g.:
```sass
.app-primary-color-l5 {
  color: #f6e9ff;
}

.app-primary-bg-color-l5 {
  background-color: #f6e9ff;
}
// and so on...
```

### Global variables
The default text colors are defined as:
```sass
$color-text-light: hcl(0, 0, 0)!default; // light theme dark text color
$color-text-dark: hcl(0, 0, 100)!default; // dark theme light text color
```

The default chroma and luminance curves (steps) are defined as:
```sass
// hcl saturation and brightness curves used to generate color palettes
$chroma-curve:    (14, 25, 37, 50, 64, 75, 64, 50, 37, 25, 14)!default; // 64% chroma is the limit for readability with light text for l1 step at luminance 44%
$luminance-curve: (94, 88, 81, 73, 64, 54, 44, 35, 27, 20, 14)!default;
```

### Changing the default curves
Changing the default curves is possible but may cause contrast ratio issues. The Vue app in this project can be used to view sample palettes and validate curve changes.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
