import assert from "node:assert/strict";
import { createFlagImage } from "../dist/image.js";
import { installTestImage } from "./helpers/test-image.js";

const ImageCtor = installTestImage();

const defaultImage = createFlagImage("/flags/krasnodar.svg", "Флаг города: Краснодар");
assert.ok(defaultImage instanceof ImageCtor);
assert.equal(defaultImage.src, "/flags/krasnodar.svg");
assert.equal(defaultImage.alt, "Флаг города: Краснодар");
assert.equal(defaultImage.decoding, "async");
assert.equal(defaultImage.loading, "lazy");

const customImage = createFlagImage("/flags/krasnodar.svg", "Флаг города: Краснодар", {
  alt: "Флаг Краснодара",
  decoding: "sync",
  loading: "eager",
  className: "flag-image",
  title: "Краснодар",
  id: "krasnodar-flag",
  width: 320,
  height: 200,
  style: {
    objectFit: "contain",
    backgroundColor: "transparent",
    borderWidth: null,
  },
  dataset: {
    slug: "krasnodar",
    index: 1,
    active: true,
    hidden: false,
  },
  attributes: {
    "aria-hidden": true,
    "data-id": 123,
    draggable: false,
    role: null,
  },
});

assert.equal(customImage.alt, "Флаг Краснодара");
assert.equal(customImage.decoding, "sync");
assert.equal(customImage.loading, "eager");
assert.equal(customImage.className, "flag-image");
assert.equal(customImage.title, "Краснодар");
assert.equal(customImage.id, "krasnodar-flag");
assert.equal(customImage.width, 320);
assert.equal(customImage.height, 200);

assert.equal(customImage.style.values.get("object-fit"), "contain");
assert.equal(customImage.style.values.get("background-color"), "transparent");
assert.equal(customImage.style.values.has("border-width"), false);

assert.equal(customImage.dataset.slug, "krasnodar");
assert.equal(customImage.dataset.index, "1");
assert.equal(customImage.dataset.active, "");
assert.equal("hidden" in customImage.dataset, false);

assert.equal(customImage.getAttribute("aria-hidden"), "");
assert.equal(customImage.getAttribute("data-id"), "123");
assert.equal(customImage.getAttribute("draggable"), null);
assert.equal(customImage.getAttribute("role"), null);
