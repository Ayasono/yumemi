import request from "../index";

export const getAllProvinces = () => {
  return request({
    url: "/api/v1/prefectures",
    method: "get",
  }) as Promise<IGetAllProvincesResponse>;
};

interface IGetAllProvincesResponse {
  data: {
    message: string;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  };
}
