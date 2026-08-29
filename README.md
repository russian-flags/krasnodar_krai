# @russian-flags/krasnodar-krai

[English version](./README.en.md)

Нативная ESM-коллекция SVG-флагов городов Краснодарского края. Пакет можно использовать как npm-зависимость в JavaScript/TypeScript-проекте или как подключаемый набор SVG-файлов и ленивых загрузчиков.

Список основан на странице Википедии [«Городские населённые пункты Краснодарского края»](https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D0%B5_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D1%8B_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BA%D1%80%D0%B0%D1%8F), раздел «Города»: 26 городов. Посёлки городского типа не включены.

Коллекция содержит 26 готовых оптимизированных SVG-флагов. Исходные файлы проекта находятся в `assets/<slug>/index.svg`, а при сборке их копии попадают в `dist/flags/<slug>.svg`.

## Превью

| Город | Флаг | slug |
| --- | --- | --- |
| Абинск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/abinsk/index.svg" width="120" alt="Флаг Абинска"> | `abinsk` |
| Анапа | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/anapa/index.svg" width="120" alt="Флаг Анапы"> | `anapa` |
| Апшеронск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/apsheronsk/index.svg" width="120" alt="Флаг Апшеронска"> | `apsheronsk` |
| Армавир | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/armavir/index.svg" width="120" alt="Флаг Армавира"> | `armavir` |
| Белореченск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/belorechensk/index.svg" width="120" alt="Флаг Белореченска"> | `belorechensk` |
| Геленджик | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/gelendzhik/index.svg" width="120" alt="Флаг Геленджика"> | `gelendzhik` |
| Горячий Ключ | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/goryachy-klyuch/index.svg" width="120" alt="Флаг Горячего Ключа"> | `goryachy-klyuch` |
| Гулькевичи | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/gulkevichi/index.svg" width="120" alt="Флаг Гулькевичей"> | `gulkevichi` |
| Ейск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/yeysk/index.svg" width="120" alt="Флаг Ейска"> | `yeysk` |
| Кореновск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/korenovsk/index.svg" width="120" alt="Флаг Кореновска"> | `korenovsk` |
| Краснодар | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/krasnodar/index.svg" width="120" alt="Флаг Краснодара"> | `krasnodar` |
| Кропоткин | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/kropotkin/index.svg" width="120" alt="Флаг Кропоткина"> | `kropotkin` |
| Крымск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/krymsk/index.svg" width="120" alt="Флаг Крымска"> | `krymsk` |
| Курганинск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/kurganinsk/index.svg" width="120" alt="Флаг Курганинска"> | `kurganinsk` |
| Лабинск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/labinsk/index.svg" width="120" alt="Флаг Лабинска"> | `labinsk` |
| Новокубанск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/novokubansk/index.svg" width="120" alt="Флаг Новокубанска"> | `novokubansk` |
| Новороссийск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/novorossiysk/index.svg" width="120" alt="Флаг Новороссийска"> | `novorossiysk` |
| Приморско-Ахтарск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/primorsko-akhtarsk/index.svg" width="120" alt="Флаг Приморско-Ахтарска"> | `primorsko-akhtarsk` |
| Славянск-на-Кубани | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/slavyansk-na-kubani/index.svg" width="120" alt="Флаг Славянска-на-Кубани"> | `slavyansk-na-kubani` |
| Сочи | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/sochi/index.svg" width="120" alt="Флаг Сочи"> | `sochi` |
| Темрюк | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/temryuk/index.svg" width="120" alt="Флаг Темрюка"> | `temryuk` |
| Тимашёвск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/timashevsk/index.svg" width="120" alt="Флаг Тимашёвска"> | `timashevsk` |
| Тихорецк | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/tikhoretsk/index.svg" width="120" alt="Флаг Тихорецка"> | `tikhoretsk` |
| Туапсе | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/tuapse/index.svg" width="120" alt="Флаг Туапсе"> | `tuapse` |
| Усть-Лабинск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/ust-labinsk/index.svg" width="120" alt="Флаг Усть-Лабинска"> | `ust-labinsk` |
| Хадыженск | <img src="https://raw.githubusercontent.com/russian-flags/krasnodar_krai/main/assets/khadyzhensk/index.svg" width="120" alt="Флаг Хадыженска"> | `khadyzhensk` |

## Возможности

- 26 флагов городов в формате SVG.
- ESM-сборка с TypeScript-типами.
- Ленивые загрузчики для каждого флага.
- Поиск флага по slug, коду, русскому/английскому названию или alias.
- Прямой импорт SVG-файлов через `flags/<slug>` или `svg/<slug>`.

## Установка

```bash
npm install @russian-flags/krasnodar-krai
```

Для локальной проверки из отдельного проекта-потребителя:

```bash
npm install /path/to/krasnodar_krai
```

## Быстрый старт

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
  alt: "Флаг Краснодара",
  className: "flag",
});

document.body.append(image);
```

`loadFlag` — алиас для `loadFlagImage`. Функция лениво импортирует модуль нужного флага, создаёт `<img>` и по умолчанию задаёт `loading="lazy"` и `decoding="async"`.

API создания изображений (`loadFlag`, `loadFlagImage`, `createFlagImage`) рассчитан на браузер и требует глобальный `Image`/DOM. Метаданные и функции поиска можно использовать в Node.js без DOM.

## Подключение SVG напрямую

```js
import krasnodarFlag from "@russian-flags/krasnodar-krai/flags/krasnodar";
import krasnodarSvg from "@russian-flags/krasnodar-krai/svg/krasnodar";

console.log(krasnodarFlag);
console.log(krasnodarSvg);
```

Вариант с расширением тоже поддерживается:

```js
import krasnodarFlag from "@russian-flags/krasnodar-krai/flags/krasnodar.svg";
import krasnodarSvg from "@russian-flags/krasnodar-krai/svg/krasnodar.svg";
```

`flags/<slug>` и `svg/<slug>` указывают на один и тот же файл внутри пакета:

```text
dist/flags/<slug>.svg
```

Default-импорт SVG возвращает URL-строку и требует сборщик с поддержкой SVG-ассетов, например Vite, webpack или Parcel. Нативный Node.js не импортирует `.svg` как JavaScript-модуль; для него используйте API метаданных или обычный путь к файлу.

После публикации пакет также можно использовать как источник SVG через npm CDN:

```html
<img src="https://unpkg.com/@russian-flags/krasnodar-krai@0.1.0/dist/flags/krasnodar.svg" alt="Флаг Краснодара" />
```

## Поиск города

В большинство функций можно передавать:

- slug: `"goryachy-klyuch"`;
- код: `"GORYACHY_KLYUCH"`;
- русское название: `"Горячий Ключ"`;
- английское название: `"Goryachy Klyuch"`;
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

Ввод нормализуется: пробелы по краям удаляются, регистр не важен, `ё` считается как `е`, пробелы и `_` заменяются на `-`.

## Preload

`preloadFlag` запускает загрузку модуля SVG без ожидания результата. Это удобно на `hover`, `focus` или перед появлением строки во viewport.

```js
import { preloadFlag } from "@russian-flags/krasnodar-krai";

button.addEventListener("pointerenter", () => {
  preloadFlag("krasnodar");
});
```

Неизвестные значения игнорируются и не выбрасывают ошибку.

## API

| Экспорт | Описание |
| --- | --- |
| `settlements` | Массив метаданных `{ slug, code, nameRu, nameEn, aliases }`. |
| `settlementSlugs` | Массив всех доступных slug. |
| `normalizeSettlementInput(input)` | Нормализует пользовательский ввод перед поиском. |
| `resolveSettlementSlug(input)` | Возвращает slug по slug, коду, названию или alias. |
| `getFlagModuleLoader(input)` | Возвращает ленивый загрузчик модуля флага или `undefined`. |
| `loadFlagModule(input)` | Лениво импортирует модуль флага. Бросает ошибку для неизвестного значения. |
| `loadFlagImage(input, options)` | В браузере загружает флаг и возвращает `HTMLImageElement`; отклоняет Promise для неизвестного значения. |
| `loadFlag(input, options)` | Алиас для `loadFlagImage` с тем же поведением. |
| `preloadFlag(input)` | Запускает загрузку модуля без ожидания результата. |
| `createFlagImage(src, defaultAlt, options)` | Создаёт и настраивает `<img>` для SVG-флага. |

## Типы

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

## Демо

```bash
cd examples
npm install
npm run dev
```

Vite откроет страницу примера в браузере. В отличие от npm API пакета, пример отображает SVG напрямую из `assets`.

## Разработка

```bash
npm install
npm run build
npm test
npm run typecheck
npm run pack:dry
npm run release:check
```

Сборка устроена так:

1. `scripts/build-source.js` читает `src/settlements.ts`, проверяет `assets/<slug>/index.svg` и генерирует TypeScript-исходники.
2. `scripts/build.js` собирает JavaScript через `esbuild` и копирует SVG в `dist/flags/<slug>.svg`.
3. `tsc -p tsconfig.build.json` генерирует `.d.ts` в `dist`.

Чтобы обновить флаг, положите SVG в `assets/<slug>/index.svg` и запустите сборку.

Каталог `examples/` исключён из npm-пакета через поле `files` в `package.json` и дополнительно через `.npmignore`.

## Репозиторий

- GitHub: <https://github.com/russian-flags/krasnodar_krai>
- Issues: <https://github.com/russian-flags/krasnodar_krai/issues>

## Лицензия

Код пакета распространяется по лицензии MIT. SVG-флаги изображают официальные муниципальные символы и не лицензируются этим пакетом на условиях MIT. Использование названий, эмблем и официальных символов может регулироваться отдельно; подробности см. в [LICENSE](./LICENSE).
