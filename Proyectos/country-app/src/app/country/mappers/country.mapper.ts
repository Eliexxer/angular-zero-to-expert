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
    };
  }

  static mapRestCountriesToCountries(response: RestCountriesResponse): AppCountry[] {
    return response.data.objects.map(CountryMapper.mapRestCountryToCountry);
  }
}
