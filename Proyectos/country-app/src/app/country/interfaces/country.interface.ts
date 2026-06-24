import { Codes, Translation } from "./rest-country.interface";

export interface Country {
  uuid: string | undefined;
  name: string;
  flag: string | undefined;
  population: number | undefined;
  capital: string;
  flagSvg: string | undefined;
  codes?: Codes;
}
