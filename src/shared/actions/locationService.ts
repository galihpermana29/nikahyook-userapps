'use server';

import type { IFetchGeneralResponse } from '../models/generalInterfaces';
import type {
  TAllLocationCityResponse,
  TAllLocationDistrictResponse,
  TAllLocationProvinceResponse,
  TAllLocationVillageResponse,
} from '../models/locationInterfaces';
import { errorHandling } from '../usecase/errorHandling';

const apiURL = 'https://www.emsifa.com/api-wilayah-indonesia/api';

export async function getAllProvinces(): Promise<
  IFetchGeneralResponse<string | TAllLocationProvinceResponse>
> {
  const res = await fetch(apiURL + '/provinces.json');

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = (await res.json()) as TAllLocationProvinceResponse;

  return { success: true, data };
}

export async function getAllCities(
  provinceId: string
): Promise<IFetchGeneralResponse<string | TAllLocationCityResponse>> {
  const res = await fetch(apiURL + `/regencies/${provinceId}.json`);

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = (await res.json()) as TAllLocationCityResponse;

  return { success: true, data };
}

export async function getAllDistricts(
  cityId: string
): Promise<IFetchGeneralResponse<string | TAllLocationDistrictResponse>> {
  const res = await fetch(apiURL + `/districts/${cityId}.json`);

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = (await res.json()) as TAllLocationDistrictResponse;

  return { success: true, data };
}

export async function getAllVillages(
  districtId: string
): Promise<IFetchGeneralResponse<string | TAllLocationVillageResponse>> {
  const res = await fetch(apiURL + `/villages/${districtId}.json`);

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = (await res.json()) as TAllLocationVillageResponse;

  return { success: true, data };
}
