import { Codes, Currency, Language, Memberships, Translation } from "./rest-country.interface";

export interface Country {
  uuid: string | undefined;
  name: string;
  flag: string | undefined;
  population: number | undefined;
  capital: string;
  flagSvg: string | undefined;
  code?: string | undefined;
  region?: string | undefined;
  subregion?: string | undefined;
  languages?: Language[] | undefined;
  areaKm2?: number | undefined;
  callingCodes?:string[] | undefined;
  memberships?: Memberships | undefined;
  populationDensity?: number | undefined;
  timezones?: string[] | undefined;
  currencies?: Currency[] | undefined;
  governmentType?: string | undefined;
}
