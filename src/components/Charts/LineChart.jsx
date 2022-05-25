import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
  DateTime,
  Legend,
  Inject,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../context/StateContext";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineChart = () => {
  const { currentTheme } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        fill: currentTheme === "Dark" ? "#fff" : "#33373E",
      }}
      background={currentTheme === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        background: currentTheme === "Dark" ? "#fff" : "#33373E",
        textStyle: {
          color: currentTheme === "Dark" ? "#33373E" : "#fff",
        },
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
