import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const datapPointValue = props.data.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...datapPointValue);
  return (
    <div className="chart">
      {props.data.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
