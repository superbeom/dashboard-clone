import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  DateTime,
  Legend,
  Inject,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../context/StateContext";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const Area = () => {
  const { currentTheme } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />

      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentTheme === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{
          background: currentTheme === "Dark" ? "#fff" : "#33373E",
          textStyle: {
            color: currentTheme === "Dark" ? "#33373E" : "#fff",
          },
        }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />

        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
