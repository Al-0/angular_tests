export interface Spa {
  official: string;
  common: string;
}

export interface Grn {
  official: string;
  common: string;
}

export interface Aym {
  official: string;
  common: string;
}

export interface Que {
  official: string;
  common: string;
}

export interface Bjz {
  official: string;
  common: string;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Ber {
  official: string;
  common: string;
}

export interface Mey {
  official: string;
  common: string;
}

export interface Cha {
  official: string;
  common: string;
}

export interface NativeName {
  spa: Spa;
  grn: Grn;
  aym: Aym;
  que: Que;
  bjz: Bjz;
  eng: Eng;
  fra: Fra;
  por: Por;
  ber: Ber;
  mey: Mey;
  cha: Cha;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface MXN {
  name: string;
  symbol: string;
}

export interface HNL {
  name: string;
  symbol: string;
}

export interface UYU {
  name: string;
  symbol: string;
}

export interface ARS {
  name: string;
  symbol: string;
}

export interface PYG {
  name: string;
  symbol: string;
}

export interface USD {
  name: string;
  symbol: string;
}

export interface BOB {
  name: string;
  symbol: string;
}

export interface NIO {
  name: string;
  symbol: string;
}

export interface BZD {
  name: string;
  symbol: string;
}

export interface PAB {
  name: string;
  symbol: string;
}

export interface COP {
  name: string;
  symbol: string;
}

export interface PEN {
  name: string;
  symbol: string;
}

export interface CLP {
  name: string;
  symbol: string;
}

export interface GTQ {
  name: string;
  symbol: string;
}

export interface DOP {
  name: string;
  symbol: string;
}

export interface CRC {
  name: string;
  symbol: string;
}

export interface XAF {
  name: string;
  symbol: string;
}

export interface CUC {
  name: string;
  symbol: string;
}

export interface CUP {
  name: string;
  symbol: string;
}

export interface DZD {
  name: string;
  symbol: string;
}

export interface MAD {
  name: string;
  symbol: string;
}

export interface MRU {
  name: string;
  symbol: string;
}

export interface EUR {
  name: string;
  symbol: string;
}

export interface VES {
  name: string;
  symbol: string;
}

export interface Currencies {
  MXN: MXN;
  HNL: HNL;
  UYU: UYU;
  ARS: ARS;
  PYG: PYG;
  USD: USD;
  BOB: BOB;
  NIO: NIO;
  BZD: BZD;
  PAB: PAB;
  COP: COP;
  PEN: PEN;
  CLP: CLP;
  GTQ: GTQ;
  DOP: DOP;
  CRC: CRC;
  XAF: XAF;
  CUC: CUC;
  CUP: CUP;
  DZD: DZD;
  MAD: MAD;
  MRU: MRU;
  EUR: EUR;
  VES: VES;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  spa: string;
  grn: string;
  aym: string;
  que: string;
  bjz: string;
  eng: string;
  fra: string;
  por: string;
  ber: string;
  mey: string;
  cha: string;
}

export interface Ara {
  official: string;
  common: string;
}

export interface Ces {
  official: string;
  common: string;
}

export interface Cym {
  official: string;
  common: string;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Est {
  official: string;
  common: string;
}

export interface Fin {
  official: string;
  common: string;
}

export interface Fra2 {
  official: string;
  common: string;
}

export interface Hrv {
  official: string;
  common: string;
}

export interface Hun {
  official: string;
  common: string;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Kor {
  official: string;
  common: string;
}

export interface Nld {
  official: string;
  common: string;
}

export interface Per {
  official: string;
  common: string;
}

export interface Pol {
  official: string;
  common: string;
}

export interface Por2 {
  official: string;
  common: string;
}

export interface Rus {
  official: string;
  common: string;
}

export interface Slk {
  official: string;
  common: string;
}

export interface Spa2 {
  official: string;
  common: string;
}

export interface Swe {
  official: string;
  common: string;
}

export interface Urd {
  official: string;
  common: string;
}

export interface Zho {
  official: string;
  common: string;
}

export interface Translations {
  ara: Ara;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra2;
  hrv: Hrv;
  hun: Hun;
  ita: Ita;
  jpn: Jpn;
  kor: Kor;
  nld: Nld;
  per: Per;
  pol: Pol;
  por: Por2;
  rus: Rus;
  slk: Slk;
  spa: Spa2;
  swe: Swe;
  urd: Urd;
  zho: Zho;
}

export interface Eng2 {
  f: string;
  m: string;
}

export interface Fra3 {
  f: string;
  m: string;
}

export interface Demonyms {
  eng: Eng2;
  fra: Fra3;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  2018: number;
  2019?: number;
  2014?: number;
  1999?: number;
  2017?: number;
  2006?: number;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
