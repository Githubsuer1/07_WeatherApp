import { useState, useEffect } from 'react';
import { getWeatherByCity } from '../services/WeatherAPI';

const useWeatherAPI = (city) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!city) return;

        const abortController = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getWeatherByCity(city, abortController.signal);
                setData(response.data);
            } catch (error) {
                if (error.name !== "CanceledError") {
                    setError('city not found!')
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => abortController.abort();
    }, [city])

    return { data, loading, error }
}

export default useWeatherAPI;