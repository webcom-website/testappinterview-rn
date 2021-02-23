import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

/**
 * devolver formato Fecha como cadena;
 * @param date
 */
export const formatDate = (date: number): string => {
  const parsedUnix = moment.unix(date);
  const parsedDate = moment(parsedUnix).format('DD [de] MMMM');

  return parsedDate;
};

/**
 * devolver la temperatura del formato como String;
 * @param temperature
 */
export const formatTemperature = (temperature: number): string => {
  const round = Math.round(temperature);
  const parsedTemperature = `${String(round)}º`;

  return parsedTemperature;
};

/**
 * devolver formato Hora como Cadena;
 * @param date
 */
export const formatTime = (date: number): string => {
  const parsedUnix = moment.unix(date);
  const parsedDate = moment(parsedUnix).format('LT');

  return parsedDate;
};

export const formatHumidity = (humidity: number): string =>
  `${String(humidity)}%`;
