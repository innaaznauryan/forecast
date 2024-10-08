import Today from '../components/Today';
import Forecast from '../components/Forecast';
import ControlPanel from '../components/ControlPanel';

const Weather = () => {

    return (
        <>
            <ControlPanel />
            <h1>Weather</h1>
            <Today />
            <Forecast />
        </>
    )
}

export default Weather;