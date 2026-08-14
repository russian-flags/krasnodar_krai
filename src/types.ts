export type SettlementSlug = "abinsk" | "anapa" | "apsheronsk" | "armavir" | "belorechensk" | "gelendzhik" | "goryachy-klyuch" | "gulkevichi" | "yeysk" | "korenovsk" | "krasnodar" | "kropotkin" | "krymsk" | "kurganinsk" | "labinsk" | "novokubansk" | "novorossiysk" | "primorsko-akhtarsk" | "slavyansk-na-kubani" | "sochi" | "temryuk" | "timashevsk" | "tikhoretsk" | "tuapse" | "ust-labinsk" | "khadyzhensk";
export type SettlementInput = SettlementSlug | string;

export interface SettlementMeta {
  readonly slug: SettlementSlug;
  readonly code: string;
  readonly nameRu: string;
  readonly nameEn: string;
  readonly aliases: readonly string[];
}

export type FlagImageAttributeValue = string | number | boolean | null | undefined;

export interface FlagImageOptions {
  readonly alt?: string;
  readonly decoding?: "async" | "auto" | "sync";
  readonly loading?: "eager" | "lazy";
  readonly className?: string;
  readonly title?: string;
  readonly id?: string;
  readonly width?: number;
  readonly height?: number;
  readonly style?: Partial<CSSStyleDeclaration>;
  readonly dataset?: Record<string, FlagImageAttributeValue>;
  readonly attributes?: Record<string, FlagImageAttributeValue>;
}

export type FlagImageFactory = (options?: FlagImageOptions) => HTMLImageElement;

export interface FlagModule {
  readonly src: string;
  readonly createImage: FlagImageFactory;
  readonly default: FlagImageFactory;
}
