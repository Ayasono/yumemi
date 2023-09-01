import { createStore } from "vuex";

const selectedProvinces: ISelectedProvinces | [] = [];
const selectedComposition: ISelectedComposition = "総人口";
export default createStore({
  state: { selectedProvinces, selectedComposition },
  getters: {
    getSelectedProvincesYAxisData(state: IState) {
      return state.selectedProvinces.map((item) => {
        const selectedCompositionData = item.population.find(
          (composition) => composition.label === state.selectedComposition
        );
        const data =
          selectedCompositionData?.data.map((val) => val.value) || [];

        return {
          name: item.province,
          type: "line",
          data,
        };
      });
    },
  },
  mutations: {
    setSelectedProvinces(state: IState, provincesData: IProvinceData) {
      state.selectedProvinces = [...state.selectedProvinces, provincesData];
    },
    removeSelectedProvince(state: IState, provincesName: string) {
      const index = state.selectedProvinces.findIndex(
        (obj) => obj.province === provincesName
      );
      if (index === -1) return;
      else state.selectedProvinces.splice(index, 1);
    },
    changeSelectedComposition(state: IState, composition: string) {
      state.selectedComposition = composition;
    },
  },
  actions: {},
  modules: {},
});
interface IPopulationData {
  label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口";
  data: { year: number; value: number }[];
}
interface IProvinceData {
  province: string;
  population: IPopulationData[];
}

interface IState {
  selectedProvinces: ISelectedProvinces;
  selectedComposition: string;
}

type ISelectedProvinces = IProvinceData[];

type ISelectedComposition = "総人口" | "年少人口" | "生産年齢人口" | "老年人口";
