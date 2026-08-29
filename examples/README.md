# Пример

Демо-приложение показывает SVG-флаги из локальной папки `assets` и метаданные из `src/settlements.ts`.

Флаги подключаются через `import.meta.glob("../assets/*/index.svg")`, чтобы пример смотрел прямо в `assets/<slug>/index.svg`.

## Запуск

Из корня проекта:

```bash
npm run example:dev
```

Или из папки `examples`:

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Пример проверяет:

- импорт списка городов из `src/settlements.ts`;
- загрузку SVG из локальной папки `assets`;
- отображение всех 26 городов Краснодарского края.
