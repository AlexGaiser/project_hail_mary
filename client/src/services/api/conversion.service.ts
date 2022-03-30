import { request } from './request.service';
import { RequestResponse } from './request.service';
interface ConversionResponseData {
  value: string;
  outputType: string;
  origin: string;
}

export const fetchHumanNumberToEridian = async (
  num: number,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/human/number/${num.toString()}`);
};

export const fetchHumanSecondsToEridian = async (
  num: number,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/human/seconds/${num.toString()}`);
};

export const fetchEridianSecondsToHuman = async (
  num: number,
): Promise<RequestResponse<ConversionResponseData>> => {
  return request.get(`/eridian/seconds/${num.toString()}`);
};

export const fetchEridianNumberToHuman = (
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
