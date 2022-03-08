import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const arrayOfDataPoints = props.dataPoints.map((dataPoint) => dataPoint.value)
    const max = Math.max(...arrayOfDataPoints)

    return <div className="chart">
        {props.dataPoints.map(data => {
            return <ChartBar
                        key={data.label}
                        value={data.value}
                        maxValue={max}
                        label={data.label}/>
        })}
    </div>
}

export default Chart
