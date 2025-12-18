import { useState } from "react";
import SearchBar from "./components/SearchBar";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import EmptyState from "./components/EmptyState";
import ErrorMessage from "./components/Errormsg";
import WeatherSkeleton from "./components/WeatherSkeleton";

function App() {
  const [city, setCity] = useState("");
  const { data, loading, error } = useWeather(city);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4">

      {/* Header */}
      <h1
        className="
          text-center pt-8
          text-2xl sm:text-3xl lg:text-4xl
          font-bold text-indigo-400
        "
      >
        Weather App
      </h1>

      {/* Search */}
      <SearchBar onSearch={setCity} />

      {/* States */}
      <div className="mt-8 flex flex-col justify-center">
        {/* Weather Data */}
        {loading && <WeatherSkeleton />}

        {error && <ErrorMessage message={error} />}

        {!data && !loading && !error && <EmptyState />}

        {data && <WeatherCard weather={data} />}
      </div>



    </div>
  );
}

export default App;
