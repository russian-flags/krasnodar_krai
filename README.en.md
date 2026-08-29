# @russian-flags/krasnodar-krai

[Русская версия](./README.md)

Native ESM collection of SVG city flags and city metadata for Krasnodar Krai, Russia. The package can be used as an npm dependency in JavaScript/TypeScript projects or as a local set of SVG files and lazy loaders.

The list is based on the Russian Wikipedia page ["Городские населённые пункты Краснодарского края"](https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D0%B5_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D1%8B_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BA%D1%80%D0%B0%D1%8F), "Города" section: 26 cities. Urban-type settlements are not included.

The collection contains 26 ready-to-use optimized SVG flags. Project source files live in `assets/<slug>/index.svg`, and the build copies them to `dist/flags/<slug>.svg`.

## Preview

| City | Flag | slug |
| --- | --- | --- |
| Abinsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/abinsk/index.svg" width="120" alt="Flag of Abinsk"> | `abinsk` |
| Anapa | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/anapa/index.svg" width="120" alt="Flag of Anapa"> | `anapa` |
| Apsheronsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/apsheronsk/index.svg" width="120" alt="Flag of Apsheronsk"> | `apsheronsk` |
| Armavir | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/armavir/index.svg" width="120" alt="Flag of Armavir"> | `armavir` |
| Belorechensk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/belorechensk/index.svg" width="120" alt="Flag of Belorechensk"> | `belorechensk` |
| Gelendzhik | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/gelendzhik/index.svg" width="120" alt="Flag of Gelendzhik"> | `gelendzhik` |
| Goryachy Klyuch | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/goryachy-klyuch/index.svg" width="120" alt="Flag of Goryachy Klyuch"> | `goryachy-klyuch` |
| Gulkevichi | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/gulkevichi/index.svg" width="120" alt="Flag of Gulkevichi"> | `gulkevichi` |
| Yeysk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/yeysk/index.svg" width="120" alt="Flag of Yeysk"> | `yeysk` |
| Korenovsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/korenovsk/index.svg" width="120" alt="Flag of Korenovsk"> | `korenovsk` |
| Krasnodar | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/krasnodar/index.svg" width="120" alt="Flag of Krasnodar"> | `krasnodar` |
| Kropotkin | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/kropotkin/index.svg" width="120" alt="Flag of Kropotkin"> | `kropotkin` |
| Krymsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/krymsk/index.svg" width="120" alt="Flag of Krymsk"> | `krymsk` |
| Kurganinsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/kurganinsk/index.svg" width="120" alt="Flag of Kurganinsk"> | `kurganinsk` |
| Labinsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/labinsk/index.svg" width="120" alt="Flag of Labinsk"> | `labinsk` |
| Novokubansk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/novokubansk/index.svg" width="120" alt="Flag of Novokubansk"> | `novokubansk` |
| Novorossiysk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/novorossiysk/index.svg" width="120" alt="Flag of Novorossiysk"> | `novorossiysk` |
| Primorsko-Akhtarsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/primorsko-akhtarsk/index.svg" width="120" alt="Flag of Primorsko-Akhtarsk"> | `primorsko-akhtarsk` |
| Slavyansk-na-Kubani | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/slavyansk-na-kubani/index.svg" width="120" alt="Flag of Slavyansk-na-Kubani"> | `slavyansk-na-kubani` |
| Sochi | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/sochi/index.svg" width="120" alt="Flag of Sochi"> | `sochi` |
| Temryuk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/temryuk/index.svg" width="120" alt="Flag of Temryuk"> | `temryuk` |
| Timashevsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/timashevsk/index.svg" width="120" alt="Flag of Timashevsk"> | `timashevsk` |
| Tikhoretsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/tikhoretsk/index.svg" width="120" alt="Flag of Tikhoretsk"> | `tikhoretsk` |
| Tuapse | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/tuapse/index.svg" width="120" alt="Flag of Tuapse"> | `tuapse` |
| Ust-Labinsk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/ust-labinsk/index.svg" width="120" alt="Flag of Ust-Labinsk"> | `ust-labinsk` |
| Khadyzhensk | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/khadyzhensk/index.svg" width="120" alt="Flag of Khadyzhensk"> | `khadyzhensk` |

## Features

- 26 city flags in SVG format.
- ESM build with TypeScript types.
- Lazy loaders for every flag.
- Flag lookup by slug, code, Russian/English name, or alias.
- Direct SVG imports through `flags/<slug>` or `svg/<slug>`.

## Installation

```bash
npm install @russian-flags/krasnodar-krai
```

For a local check from a separate consumer project:

```bash
npm install /path/to/krasnodar_krai
```

## Quick Start

```js
import { loadFlag, settlements } from "@russian-flags/krasnodar-krai";

console.log(settlements[0]);
// {
//   slug: "abinsk",
//   code: "ABINSK",
//   nameRu: "Абинск",
//   nameEn: "Abinsk",
//   aliases: [],
// }

const image = await loadFlag("krasnodar", {
  alt: "Flag of Krasnodar",
  className: "flag",
});

document.body.append(image);
```

`loadFlag` is an alias for `loadFlagImage`. It lazily imports the requested flag module, creates an `<img>`, and sets `loading="lazy"` and `decoding="async"` by default.

The image creation APIs target browsers and require a global `Image`/DOM. Metadata and lookup helpers work in Node.js without a DOM.

## Direct SVG Imports

```js
import krasnodarFlag from "@russian-flags/krasnodar-krai/flags/krasnodar";
import krasnodarSvg from "@russian-flags/krasnodar-krai/svg/krasnodar";

console.log(krasnodarFlag);
console.log(krasnodarSvg);
```

The extension variant is supported too:

```js
import krasnodarFlag from "@russian-flags/krasnodar-krai/flags/krasnodar.svg";
import krasnodarSvg from "@russian-flags/krasnodar-krai/svg/krasnodar.svg";
```

`flags/<slug>` and `svg/<slug>` point to the same package file:

```text
dist/flags/<slug>.svg
```

Default-importing an SVG returns a URL string and requires a bundler with SVG asset support, such as Vite, webpack, or Parcel. Native Node.js does not import `.svg` files as JavaScript modules; use the metadata API or a regular file path there.

After publication, the package can also serve SVG files through an npm CDN:

```html
<img src="https://unpkg.com/@russian-flags/krasnodar-krai@0.1.0/dist/flags/krasnodar.svg" alt="Flag of Krasnodar" />
```

## City Lookup

Most functions accept:

- slug: `"goryachy-klyuch"`;
- code: `"GORYACHY_KLYUCH"`;
- Russian name: `"Горячий Ключ"`;
- English name: `"Goryachy Klyuch"`;
- alias: `"Goryachiy Klyuch"`.

```js
import {
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "@russian-flags/krasnodar-krai";

console.log(settlements.length); // 26
console.log(settlementSlugs.includes("krasnodar")); // true

console.log(resolveSettlementSlug("KRASNODAR")); // "krasnodar"
console.log(resolveSettlementSlug("Краснодар")); // "krasnodar"
console.log(resolveSettlementSlug("GORYACHY_KLYUCH")); // "goryachy-klyuch"
console.log(resolveSettlementSlug("Goryachiy Klyuch")); // "goryachy-klyuch"
console.log(resolveSettlementSlug("Yeisk")); // "yeysk"
console.log(resolveSettlementSlug("unknown")); // undefined
```

Input is normalized: leading/trailing whitespace is trimmed, case does not matter, `ё` is treated as `е`, and spaces or `_` are replaced with `-`.

## Preload

`preloadFlag` starts loading an SVG module without waiting for it. This is useful on `hover`, `focus`, or before a row enters the viewport.

```js
import { preloadFlag } from "@russian-flags/krasnodar-krai";

button.addEventListener("pointerenter", () => {
  preloadFlag("krasnodar");
});
```

Unknown values are ignored and do not throw.

## API

| Export | Description |
| --- | --- |
| `settlements` | Metadata array `{ slug, code, nameRu, nameEn, aliases }`. |
| `settlementSlugs` | Array of all available slugs. |
| `normalizeSettlementInput(input)` | Normalizes user input before lookup. |
| `resolveSettlementSlug(input)` | Returns a slug by slug, code, name, or alias. |
| `getFlagModuleLoader(input)` | Returns a lazy flag module loader or `undefined`. |
| `loadFlagModule(input)` | Lazily imports a flag module and throws for unknown input. |
| `loadFlagImage(input, options)` | Loads a flag in the browser and returns an `HTMLImageElement`; rejects for unknown input. |
| `loadFlag(input, options)` | Alias for `loadFlagImage` with the same behavior. |
| `preloadFlag(input)` | Starts module loading without awaiting it. |
| `createFlagImage(src, defaultAlt, options)` | Creates and configures an `<img>` for an SVG flag. |

## Types

```ts
import type {
  FlagImageOptions,
  FlagImageAttributeValue,
  FlagImageFactory,
  FlagModule,
  SettlementInput,
  SettlementMeta,
  SettlementSlug,
} from "@russian-flags/krasnodar-krai";
```

## Demo

```bash
cd examples
npm install
npm run dev
```

Vite opens the example page in the browser. Unlike the package npm API, the example displays SVG directly from `assets`.

## Development

```bash
npm install
npm run build
npm test
npm run typecheck
npm run pack:dry
npm run release:check
```

Build flow:

1. `scripts/build-source.js` reads `src/settlements.ts`, checks `assets/<slug>/index.svg`, and generates TypeScript sources.
2. `scripts/build.js` builds JavaScript with `esbuild` and copies SVG files to `dist/flags/<slug>.svg`.
3. `tsc -p tsconfig.build.json` emits `.d.ts` files into `dist`.

To update a flag, put the SVG into `assets/<slug>/index.svg` and run the build.

The `examples/` directory is excluded from the npm package by `package.json#files` and explicitly by `.npmignore`.

## Repository

- GitHub: <https://github.com/russian-flags/krasnodar_krai>
- Issues: <https://github.com/russian-flags/krasnodar_krai/issues>

## License

Package code is MIT-licensed. The SVG flags depict official municipal symbols and are not licensed under MIT by this package. Use of names, emblems, and official symbols may be regulated separately; see [LICENSE](./LICENSE) for details.
