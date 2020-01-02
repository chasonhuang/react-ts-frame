import { EChartOption } from "echarts";

/**
 * get initial option
 */
export function getInitialOption(): EChartOption {
  return {
    legend: {
      right: 50,
      itemGap: 20,
      itemWidth: 10,
      itemHeight: 10,
      icon: "circle",
      textStyle: {
        color: "#B8CAE6",
      },
    },
    grid: {
      right: 50,
      left: 50,
    },
    xAxis: [getInitialXAxis()],
    yAxis: [getInitialYAxis()],
    dataZoom: [getInitialDataZoomSlider()],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        lineStyle: {
          color: "#B8CAE6",
        },
        crossStyle: {
          color: "#B8CAE6",
        },
      },
      position: tooltipPosition,
      backgroundColor: "#40516B",
      padding: 5,
    },
    series: [],
  };
}

export function getInitialXAxis(): EChartOption.XAxis {
  return {
    name: "xAxis",
    min: "dataMin",
    max: "dataMax",
    nameTextStyle: {
      color: "#B8CAE6",
    },
    axisLine: {
      lineStyle: {
        color: "#40516B",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#B8CAE6",
    },
    splitLine: {
      lineStyle: {
        color: "#37465C",
      },
    },
    axisPointer: {
      label: {
        shadowColor: "transparent",
      },
    },
  };
}

export function getInitialYAxis(): EChartOption.YAxis {
  return {
    name: "yAxis",
    min: "dataMin",
    max: "dataMax",
    nameTextStyle: {
      color: "#B8CAE6",
    },
    axisLine: {
      lineStyle: {
        color: "#40516B",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#B8CAE6",
    },
    splitLine: {
      lineStyle: {
        color: "#37465C",
      },
    },
    axisPointer: {
      label: {
        shadowColor: "transparent",
      },
    },
  };
}

export function getInitialDataZoomSlider(type?: string): EChartOption.DataZoom.Slider {
  return {
    type: "slider",
    showDetail: false,
    backgroundColor: "#37465C",
    fillerColor: "rgba(104,132,173,0.4)",
    borderColor: "none",
    textStyle: {
      color: "#B8CAE6",
    },
    bottom: 0,
  };
}

export function getInitialDataZoomInside(type?: string): EChartOption.DataZoom.Inside {
  return {
    type: "inside",
  };
}

export function tooltipPosition(point: any, params: any, dom: any, rect: any, size: any) {
  const offsetX = 20;
  const offsetY = 20;
  // 其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
  const x = point[0];
  const y = point[1];
  const viewWidth = size.viewSize[0];
  const viewHeight = size.viewSize[1];
  const boxWidth = size.contentSize[0];
  const boxHeight = size.contentSize[1];
  let posX = 0; // x坐标位置
  let posY = 0; // y坐标位置

  posX = x + offsetX;
  posY = y + offsetY;

  if (posX + boxWidth > viewWidth) {
    posX = x - boxWidth - offsetX;
  }

  if (posX < 0) {
    posX = 0;
  }

  if (posY + boxHeight > viewHeight) {
    posY = y - boxHeight - offsetY;
  }

  if (posY < 0) {
    posY = 0;
  }

  return [posX, posY];
}
