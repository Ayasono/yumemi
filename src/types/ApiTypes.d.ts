// apiTypes.d.ts

declare namespace ApiTypes {
  export interface IGetAllProvincesResponse {
    data: {
      message: string;
      result: {
        prefCode: number;
        prefName: string;
      }[];
    };
  }
}
