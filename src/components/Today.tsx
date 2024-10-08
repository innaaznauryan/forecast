import { useEffect, useState } from 'react';
import { RootState, AppDispatch } from "../store/store";
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherThunk } from '../store/weatherThunk';
import { getLocalTime } from '../composable/localTime';
import { convertToCelsius, convertToFahrenheit } from '../composable/convertTemp';
import { baseUrl } from "../constants/constants";

const Today = () => {
    const dispatch: AppDispatch = useDispatch();

    const { data: weather, loading, error } = useSelector((state: RootState) => state.weather);
    const tempFormat = useSelector((state: RootState) => state.tempFormat.tempFormat);
    const search = useSelector((state: RootState) => state.search.search);

    const [localTime, setLocalTime] = useState("");
    const [temperature, setTemperature] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [humidity, setHumidity] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        dispatch(getWeatherThunk(search));
    }, [dispatch, search])

    useEffect(() => {
        if (!weather) {
            return;
        }
        setLocalTime(getLocalTime(weather.timezone));
        setHumidity(`${weather.main?.humidity} %`);
        setWindSpeed(`${weather.wind?.speed} m/s`);
        setImageUrl(`${baseUrl}/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`);
        if (tempFormat === "celsius") {
            setTemperature(convertToCelsius(weather.main?.temp));
            setFeelsLike(convertToCelsius(weather.main?.feels_like));
        } else {
            setTemperature(convertToFahrenheit(weather.main?.temp));
            setFeelsLike(convertToFahrenheit(weather.main?.feels_like));
        }
    }, [weather, tempFormat])

    if (loading) {
        return <div>Loading Weather for Today...</div>
    }

    if (error) {
        return <div>Cannot find City for Today's Weather</div>
    }

    return (
        <>
            <h3>Today in {weather.name}</h3>
            <img src={imageUrl} alt="" />
            <p>{localTime}</p>
            <p>Temperature: {temperature}</p>
            <p>Feels like: {feelsLike}</p>
            <p>Wind speed: {windSpeed}</p>
            <p>Humidity: {humidity}</p>
        </>
    )
}

export default Today;