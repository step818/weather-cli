import Conf from 'conf';
import Table from 'cli-table3';
import { configKey } from './configure';
import {
  validateApiKey,
  validateCityId,
  validateUnits,
  queryWeatherForecast
} from './utils';

export async function forecast(args) {
  const config = new Conf().get(configKey);
  const apiKey =
    args.apiKey ||
    args.apikey ||
    args['api-key'] ||
    args.key ||
    args.k ||
    config.apiKey;
  if (!validateApiKey(apiKey)) {
    return;
  }
  const cityId =
    args.city ||
    args.cityId ||
    args.cityID ||
    args['city-id'] ||
    args.c ||
    config.cityId;
  if (!validateCityId(cityId)) {
    return;
  }
  const units = args.units || args.unit || args.u || config.units;
  if (!validateUnits(units)) {
    return;
  }

  const { data } = await queryWeatherForecast(cityId, units, apiKey);

  const table = new Table({
    head: ['DateTime', data.city.name + ' Weather', 'Temp'],
    colWidths: [23, 18, 7],
    wordWrap: true
  });
  data.list.forEach(w => {
    table.push([w.dt_txt, w.weather[0].description, w.main.temp]);
  });
  console.log(table.toString());
}