import { API_BASE_URL } from '../config.development';

export const fetchHumanNumberToEridian = async (
  num: number,
): Promise<any> => {
  const res = await fetch(
    `${API_BASE_URL}/human/number/${num.toString()}`,
  );
  return await res.json();
};
