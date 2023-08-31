import request from "../index";

export const getPopulationByProvinces = async (provincesCodes: number) => {
  return await request({
    url: "/api/v1/population/composition/perYear",
    method: "get",
    params: {
      prefCode: provincesCodes,
    },
  });
};
