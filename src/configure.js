import Conf from 'conf';
import { validateApiKey, validateCityId, validateUnits } from './utils';

export const configKey = 'weather-cli';

export async function configure(args) {
  const config = new Conf();
  let currentConfigObject = config.get(configKey);
  currentConfigObject = currentConfigObject || {};

  let apiKey = args.apiKey || args.apiKey || args['api-key'] || args.key || args.k;
  if (!apiKey) {
    apiKey = currentConfigObject.apiKey;
  }
  if (!validateApiKey(apiKey)) {
    return;
  }

  let cityId = args.city || args.cityId || args.cityID || args['city-id'] || args.c;
  if (!cityId) {
    cityId = currentConfigObject.cityId || 5809844;
    cityId = Number(cityId);
  }
  if (!validateCityId(cityId)) {
    return;
  }

  let units = args.units || args.unit || args.u;
  if (!units) {
    units = currentConfigObject.units || 'Fahrenheit';
  }
  if (!validateUnits) {
    return;
  }
  
  config.set(configKey, { apiKey: apiKey, cityId: cityId, units: units });
}