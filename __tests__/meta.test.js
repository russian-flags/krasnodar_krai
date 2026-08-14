import assert from "node:assert/strict";
import {
  normalizeSettlementInput,
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "../dist/meta.js";

assert.ok(Object.isFrozen(settlements), "settlements should be frozen");
assert.ok(Object.isFrozen(settlementSlugs), "settlementSlugs should be frozen");
assert.equal(settlements.length, 26);
assert.equal(settlementSlugs.length, settlements.length);
assert.deepEqual(
  settlementSlugs,
  settlements.map((settlement) => settlement.slug)
);
assert.equal(new Set(settlementSlugs).size, settlementSlugs.length);

assert.deepEqual(settlementSlugs, [
  "abinsk",
  "anapa",
  "apsheronsk",
  "armavir",
  "belorechensk",
  "gelendzhik",
  "goryachy-klyuch",
  "gulkevichi",
  "yeysk",
  "korenovsk",
  "krasnodar",
  "kropotkin",
  "krymsk",
  "kurganinsk",
  "labinsk",
  "novokubansk",
  "novorossiysk",
  "primorsko-akhtarsk",
  "slavyansk-na-kubani",
  "sochi",
  "temryuk",
  "timashevsk",
  "tikhoretsk",
  "tuapse",
  "ust-labinsk",
  "khadyzhensk",
]);

assert.equal(normalizeSettlementInput("  KRASNODAR  "), "krasnodar");
assert.equal(normalizeSettlementInput("GORYACHY_KLYUCH"), "goryachy-klyuch");
assert.equal(normalizeSettlementInput("Тимашёвск"), "тимашевск");
assert.equal(normalizeSettlementInput("ТИМАШЕВСК"), "тимашевск");

for (const settlement of settlements) {
  assert.equal(typeof settlement.nameRu, "string");
  assert.equal(typeof settlement.nameEn, "string");
  assert.ok(Array.isArray(settlement.aliases), "settlement aliases should be an array");
  assert.equal(resolveSettlementSlug(settlement.slug), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.code), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.nameRu), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.nameEn), settlement.slug);
  for (const alias of settlement.aliases) {
    assert.equal(resolveSettlementSlug(alias), settlement.slug);
  }
}

assert.equal(resolveSettlementSlug(" Краснодар "), "krasnodar");
assert.equal(resolveSettlementSlug("KRASNODAR"), "krasnodar");
assert.equal(resolveSettlementSlug("Екатеринодар"), "krasnodar");
assert.equal(resolveSettlementSlug("GORYACHY_KLYUCH"), "goryachy-klyuch");
assert.equal(resolveSettlementSlug("Горячий Ключ"), "goryachy-klyuch");
assert.equal(resolveSettlementSlug("Goryachiy Klyuch"), "goryachy-klyuch");
assert.equal(resolveSettlementSlug("Yeisk"), "yeysk");
assert.equal(resolveSettlementSlug("Тимашевск"), "timashevsk");
assert.equal(resolveSettlementSlug("unknown"), undefined);
