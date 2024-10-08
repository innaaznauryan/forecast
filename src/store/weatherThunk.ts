import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../axios/axiosInstance';
import { apiKey } from "../constants/constants";
import { ForecastSchema, WeatherSchema } from '../types/type';

export const getWeatherThunk = createAsyncThunk<WeatherSchema, string>(
    "weather/get",
    async (city: string) => {
        const response = await apiClient.get(`weather?q=${city}&appid=${apiKey}`);
        return response.data;
    }
)

export const getForecastThunk = createAsyncThunk<ForecastSchema, string>(
    "forecast/get",
    async (city: string): Promise<ForecastSchema> => {
        const response = await apiClient.get(`forecast?q=${city}&appid=${apiKey}`);
        return response.data;
    }
)