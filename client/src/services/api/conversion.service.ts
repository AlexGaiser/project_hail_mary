import { request } from './request.service';
import { RequestResponse } from './request.service';
interface ConversionResponseData {
  value: string;
  outputType: string;
  origin: string;
}

interface ConversionAPI {
  getNumber: FetchConversionFunction<any>;
  getSeconds: FetchConversionFunction<any>;
  getAtmospheres: FetchConversionFunction<any>;
}

export type FetchConversionFunction<T> = (
  val: T,
) => Promise<RequestResponse<ConversionResponseData>>;

export const fetchHumanNumberToEridian: FetchConversionFunction<
  number
> = async (
  num: number,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/human/number/${num.toString()}`);
};

export const fetchHumanSecondsToEridian: FetchConversionFunction<
  number
> = async (
  num: number,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/human/seconds/${num.toString()}`);
};

export const fetchEridianSecondsToHuman: FetchConversionFunction<
  string
> = async (
  num: string,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/eridian/seconds/${num}`);
};

export const fetchEridianNumberToHuman: FetchConversionFunction<
  string
> = (
  num: string,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/eridian/number/${num}`);
};

export const fetchEridianAtmospheresToHuman: FetchConversionFunction<
  number
> = (num) => {
  return request.get(`/eridian/atmospheres/${num}`);
};

export const fetchHumanAtmospheresToEridian: FetchConversionFunction<
  number
> = (num) => {
  return request.get(`/eridian/atmospheres/${num}`);
};

export const HumanConversionAPI = {
  getNumber: fetchHumanNumberToEridian,
  getAtmospheres: fetchHumanAtmospheresToEridian,
  getSeconds: fetchHumanSecondsToEridian,
};

export const EridianConversionAPI: ConversionAPI = {
  getNumber: fetchEridianNumberToHuman,
  getSeconds: fetchEridianSecondsToHuman,
  getAtmospheres: fetchEridianAtmospheresToHuman,
};
