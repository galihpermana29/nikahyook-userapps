export type ILocationProvinceData = {
  id: string;
  name: string;
};

export type ILocationCityData = {
  id: string;
  province_id: string;
  name: string;
};

export type ILocationDistrictData = {
  id: string;
  regency_id: string;
  name: string;
};

export type ILocationVillageData = {
  id: string;
  district_id: string;
  name: string;
};

export type TAllLocationProvinceResponse = ILocationProvinceData[];
export type TAllLocationCityResponse = ILocationCityData[];
export type TAllLocationDistrictResponse = ILocationDistrictData[];
export type TAllLocationVillageResponse = ILocationVillageData[];
