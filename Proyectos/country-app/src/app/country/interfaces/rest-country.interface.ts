export interface RestCountriesResponse {
  data: Data;
}

export interface Data {
  objects: Country[];
  meta: Meta;
}

export interface Country {
  names: Names;
  codes?: Codes;
  capitals: Capital[];
  flag?: Flag;
  region?: string;
  subregion?: string;
  area?: Area;
  assets?: Asset[];
  borders?: string[];
  calling_codes?: string[];
  cars?: Cars;
  classification?: Classification;
  continents?: string[];
  coordinates?: Coordinates;
  currencies?: Currency[];
  date?: CountryDate;
  demonyms?: Demonyms;
  economy?: Economy;
  government_type?: string;
  landlocked?: boolean;
  languages?: Language[];
  leaders?: Leader[];
  links?: Links;
  memberships?: Memberships;
  number_format?: NumberFormat;
  parent?: Parent;
  population?: number;
  postal_code?: PostalCode;
  timezones?: string[];
  tlds?: string[];
  uuid?: string;
  _match?: Match[];
  _meta?: CountryMeta;
}

export interface Names {
  readonly common: string;
  readonly official: string;
  readonly native?: Record<string, NativeName>;
  readonly translations?: Record<string, Translation>;
  readonly alternates?: string[];
}

export interface NativeName {
  readonly common: string;
  readonly official: string;
}

export interface Translation {
  readonly common: string;
  readonly official: string;
}

export interface Codes {
  readonly alpha_2: string;
  readonly alpha_3: string;
  readonly ccn3?: string;
  readonly cioc?: string;
  readonly fifa?: string;
  readonly fips?: string;
  readonly gec?: string;
}

export interface Capital {
  readonly name: string;
  readonly coordinates: Coordinates;
  readonly attributes: CapitalAttributes;
}

export interface CapitalAttributes {
  readonly primary: boolean;
  readonly administrative: boolean;
  readonly constitutional: boolean;
  readonly executive: boolean;
  readonly judicial: boolean;
  readonly legislative: boolean;
}

export interface Coordinates {
  readonly lat: number;
  readonly lng: number;
}

export interface Flag {
  readonly emoji?: string;
  readonly unicode?: string;
  readonly html_entity?: string;
  readonly url_png: string;
  readonly url_svg: string;
  readonly description?: string;
  readonly colors?: FlagColors;
}

export interface FlagColors {
  readonly dominant: string;
  readonly prominent: string;
  readonly palette: ColorPalette[];
  readonly swatches: Record<string, string | null>;
}

export interface ColorPalette {
  readonly hex: string;
  readonly proportion: number;
}

export interface Area {
  readonly kilometers: number;
  readonly miles: number;
}

export interface Cars {
  readonly driving_side: string;
  readonly signs: string[];
}

export interface Classification {
  readonly sovereign: boolean;
  readonly un_member: boolean;
  readonly un_observer: boolean;
  readonly disputed: boolean;
  readonly dependency: boolean;
  readonly dependency_type: string;
  readonly iso_status: string;
}

export interface Currency {
  readonly code: string;
  readonly name: string;
  readonly symbol: string;
}

export interface CountryDate {
  readonly start_of_week: string;
  readonly academic_year_start?: DateStart;
  readonly fiscal_year_start?: FiscalYearStart;
}

export interface DateStart {
  readonly day: number;
  readonly month: number;
}

export interface FiscalYearStart {
  readonly corporate: CorporateFiscal;
  readonly government: DateStart;
  readonly personal: DateStart;
}

export interface CorporateFiscal {
  readonly basis: string;
  readonly day: number;
  readonly month: number;
}

export interface Demonyms {
  readonly eng: DemonymGender;
  readonly fra?: DemonymGender;
}

export interface DemonymGender {
  readonly m: string;
  readonly f: string;
}

export interface Economy {
  readonly gini_coefficient?: Record<string, number>;
}

export interface Language {
  readonly bcp47: string;
  readonly iso639_1: string;
  readonly iso639_2b: string;
  readonly iso639_2t: string;
  readonly iso639_3: string;
  readonly name: string;
  readonly native_name: string;
}

export interface Leader {
  readonly message?: string;
  readonly sample?: string;
}

export interface Links {
  readonly google_maps: string;
  readonly official: string;
  readonly open_street_maps: string;
  readonly wikipedia: string;
}

export interface Memberships {
  readonly un?: boolean;
  readonly eu?: boolean;
  readonly eurozone?: boolean;
  readonly schengen?: boolean;
  readonly nato?: boolean;
  readonly commonwealth?: boolean;
  readonly oecd?: boolean;
  readonly g7?: boolean;
  readonly g20?: boolean;
  readonly brics?: boolean;
  readonly opec?: boolean;
  readonly african_union?: boolean;
  readonly asean?: boolean;
  readonly arab_league?: boolean;
}

export interface NumberFormat {
  readonly decimal_separator: string;
  readonly thousands_separator: string;
}

export interface Parent {
  readonly alpha_2: string;
  readonly alpha_3: string;
}

export interface PostalCode {
  readonly format: string;
  readonly regex: string;
}

export interface Asset {
  readonly name: string;
  readonly url: string;
}

export interface Match {
  readonly path: string;
  readonly value: string;
}

export interface CountryMeta {
  readonly lastUpdatedTimestamp: number;
}

export interface Meta {
  readonly total: number;
  readonly count: number;
  readonly limit: number;
  readonly offset: number;
  readonly more: boolean;
  readonly request_id: string;
  readonly duration: number;
}
