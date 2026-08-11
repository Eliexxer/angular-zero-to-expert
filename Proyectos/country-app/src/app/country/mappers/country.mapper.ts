import { Country as AppCountry } from '../interfaces/country.interface';
import { RestCountriesResponse, Country as ApiCountry } from '../interfaces/rest-country.interface';

export class CountryMapper {
  static mapRestCountryToCountry(item: ApiCountry): AppCountry {
    return {
      uuid: item.uuid,
      flag: item.flag?.emoji,
      flagSvg: item.flag?.url_svg,
      population: item.population,
      name: item.names.translations?.['spa']?.common ?? item.names.common,
      capital: item.capitals[0]?.name,
      code: item.codes?.alpha_3,
      region: item.region,
      subregion: item.subregion,
      languages: item.languages,
      areaKm2: item.area?.kilometers,
      callingCodes: item.calling_codes,
      memberships: item.memberships,
      populationDensity:
        item.area?.kilometers && item.population
          ? item.population / item.area.kilometers
          : undefined,
      timezones: item.timezones,
      currencies: item.currencies,
      governmentType: item.government_type,
    };
  }

  static mapRestCountriesToCountries(response: RestCountriesResponse): AppCountry[] {
    return response.data.objects.map(CountryMapper.mapRestCountryToCountry);
  }
}
