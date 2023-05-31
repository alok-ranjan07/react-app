import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartData = props.data.map((event) => event.value);
  const totalMaxValue = Math.max(...chartData);

  return (
    <div className="chart">
      {props.data.map((event) => (
        <ChartBar
          key={event.label}
          value={event.value}
          maxValue={totalMaxValue}
          label={event.label}
        />
      ))}
    </div>
  );
};

export default Chart;
