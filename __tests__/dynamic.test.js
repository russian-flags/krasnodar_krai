import assert from "node:assert/strict";
import {
  getFlagModuleLoader,
  loadFlag,
  loadFlagImage,
  loadFlagModule,
  preloadFlag,
} from "../dist/dynamic.js";
import { installTestImage } from "./helpers/test-image.js";

const ImageCtor = installTestImage();

assert.equal(loadFlag, loadFlagImage);

const krasnodarLoader = getFlagModuleLoader("krasnodar");
assert.equal(typeof krasnodarLoader, "function");
assert.equal(getFlagModuleLoader(" KRASNODAR "), krasnodarLoader);
assert.equal(getFlagModuleLoader("Краснодар"), krasnodarLoader);
assert.equal(getFlagModuleLoader("GORYACHY_KLYUCH"), getFlagModuleLoader("goryachy-klyuch"));
assert.equal(getFlagModuleLoader("Goryachiy Klyuch"), getFlagModuleLoader("goryachy-klyuch"));
assert.equal(getFlagModuleLoader("unknown"), undefined);

assert.doesNotThrow(() => preloadFlag("krasnodar"));
assert.doesNotThrow(() => preloadFlag("unknown"));

const krasnodarModule = await loadFlagModule("Krasnodar");
assert.equal(krasnodarModule.default, krasnodarModule.createImage);
assert.equal(typeof krasnodarModule.createImage, "function");
assert.ok(krasnodarModule.src.endsWith("/flags/krasnodar.svg"));

const moduleImage = krasnodarModule.createImage({ className: "module-image" });
assert.ok(moduleImage instanceof ImageCtor);
assert.equal(moduleImage.className, "module-image");
assert.ok(moduleImage.src.endsWith("/flags/krasnodar.svg"));

const loadedImage = await loadFlagImage("KRASNODAR", {
  alt: "Lazy Krasnodar",
  className: "loaded-image",
});
assert.ok(loadedImage instanceof ImageCtor);
assert.equal(loadedImage.alt, "Lazy Krasnodar");
assert.equal(loadedImage.className, "loaded-image");
assert.equal(loadedImage.loading, "lazy");
assert.equal(loadedImage.decoding, "async");
assert.ok(loadedImage.src.endsWith("/flags/krasnodar.svg"));

const aliasImage = await loadFlag("Goryachiy Klyuch", { alt: "Alias Goryachy Klyuch" });
assert.ok(aliasImage instanceof ImageCtor);
assert.equal(aliasImage.alt, "Alias Goryachy Klyuch");

await assert.rejects(
  () => loadFlagModule("unknown"),
  /Unknown Krasnodar Krai settlement: unknown/
);
await assert.rejects(
  () => loadFlagImage("unknown"),
  /Unknown Krasnodar Krai settlement: unknown/
);
