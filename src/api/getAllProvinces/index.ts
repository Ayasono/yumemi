import request from "../index";

export const getAllProvinces = () => {
  return request({
    url: "/api/v1/prefectures",
    method: "get",
  }) as Promise<IGetAllProvincesResponse>;
};

interface IGetAllProvincesResponse {
  data: any;
  message: string;
  result: {
    prefCode: number;
    prefName: string;
  }[];
}
