export interface Country {
  name: Name;
  cca3: string;
  borders: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativenName };
}

export interface NativenName {
  common: string;
  official: string;
}
