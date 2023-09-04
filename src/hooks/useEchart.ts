import * as echarts from "echarts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function (el: HTMLElement) {
  // eslint disabled because jest can't find the type in node environment
  const echart = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echart.setOption(options, true);
  };

  const updateSize = () => {
    echart.resize();
  };

  const disposeInstance = () => {
    echart.dispose();
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.addEventListener("resize", () => {
    echart.resize();
  });

  return {
    echart,
    setOptions,
    updateSize,
    disposeInstance,
  };
}
