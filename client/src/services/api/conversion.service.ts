import { request } from './request.service';
import { RequestResponse } from './request.service';
interface ConversionResponseData {
  value: string;
  outputType: string;
  origin: string;
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

export const HumanConversionAPI = {
  getNumber: fetchHumanNumberToEridian,
};

export const EridianConversionAPI = {
  getNumber: fetchEridianNumberToHuman,
};
