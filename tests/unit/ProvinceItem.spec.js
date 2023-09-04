import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
import { getPopulationByProvinces } from "@/api/getPopulationByProvinces";
import ProvincesItem from "@/components/ProvinceItem.vue";

jest.mock("vuex", () => ({
  useStore: jest.fn(),
}));

jest.mock("@/api/getPopulationByProvinces", () => ({
  getPopulationByProvinces: jest.fn(),
}));

describe("ProvinceItem", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = {
      commit: jest.fn(),
    };
    useStore.mockReturnValue(store);

    wrapper = shallowMount(ProvincesItem, {
      props: {
        province: "Test Province",
        isChecked: false,
        code: 123,
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("should update selected provinces when checkbox is checked", async () => {
    const mockResponse = {
      data: {
        result: {
          data: [1, 2, 3],
        },
      },
    };
    getPopulationByProvinces.mockResolvedValue(mockResponse);

    const checkbox = wrapper.find("input[type='checkbox']");
    checkbox.setChecked(true);
    await wrapper.vm.updateSelectedProvinces({ target: checkbox.element });

    expect(getPopulationByProvinces).toHaveBeenCalledWith(123);
    expect(store.commit).toHaveBeenCalledWith("setSelectedProvinces", {
      province: "Test Province",
      population: [1, 2, 3],
    });
  });

  it("should remove selected province when checkbox is unchecked", () => {
    const checkbox = wrapper.find("input[type='checkbox']");
    checkbox.setChecked(false);
    wrapper.vm.updateSelectedProvinces({ target: checkbox.element });

    expect(store.commit).toHaveBeenCalledWith(
      "removeSelectedProvince",
      "Test Province"
    );
  });
});
