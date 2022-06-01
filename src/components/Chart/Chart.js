import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const valuesArray = props.dataPoints.map((data) => data.value);
    const maxValue = Math.max(...valuesArray);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
