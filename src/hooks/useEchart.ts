import * as echarts from "echarts";

export default function (el: HTMLElement) {
  const echart = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echart.setOption(options, true);
  };

  const updateSize = () => {
    echart.resize();
  };

  window.addEventListener("resize", () => {
    echart.resize();
  });

  return {
    echart,
    setOptions,
    updateSize,
  };
}
