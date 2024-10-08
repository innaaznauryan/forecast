import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../store/store";
import { getForecastThunk } from '../store/weatherThunk';
import { baseUrl } from "../constants/constants";
import { convertToCelsius, convertToFahrenheit } from "../composable/convertTemp";
import "./foreCast.scss";

const Forecast = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data: forecast, loading, error } = useSelector((state: RootState) => state.forecast);
  const tempFormat = useSelector((state: RootState) => state.tempFormat.tempFormat);
  const search = useSelector((state: RootState) => state.search.search);

  const getImageUrl = (icon: string) => {
    return `${baseUrl}/img/wn/${icon}@2x.png`;
  }
  const formatText = (text: string) => {
    return text[0].toUpperCase() + text.slice(1);
  }

  useEffect(() => {
    dispatch(getForecastThunk(search));
  }, [dispatch, search])

  if (loading) {
    return <div>Loading Weather Forecast...</div>
  }

  if (error) {
    return <div className='error'>Cannot find City for Weather Forecast</div>
  }
  
  return (
    <>
      <div className="card-container">
        {
          forecast.list?.map((data: any) => {
            const temperature = tempFormat === "celsius" 
            ? convertToCelsius(data.main.temp) 
            : convertToFahrenheit(data.main.temp);

            return (
              <div key={data.dt} className="card">
                <p>{formatText(data.weather[0].description)}</p>
                <p>{data.dt_txt}</p>
                <p>Temperature: {temperature}</p>
                <img src={getImageUrl(data.weather[0].icon)} alt="" />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Forecast;