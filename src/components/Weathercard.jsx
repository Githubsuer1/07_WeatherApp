const WeatherCard = ({ weather }) => {
    const {
        name,
        main: { temp, humidity },
        weather: [{ description, icon }],
        wind: { speed },
    } = weather;

    return (
        <div
            className="
        w-full max-w-md mx-auto mt-8
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl p-6
        shadow-[0_0_40px_rgba(99,102,241,0.5)]
        transition-transform duration-300
        hover:scale-[1.02]
      "
        >
            {/* City */}
            <h2
                className="
          text-center text-xl sm:text-2xl
          font-bold text-indigo-400
        "
            >
                {name}
            </h2>

            {/* Icon + Temp */}
            <div className="flex items-center justify-center gap-4 mt-4">
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                />

                <p
                    className="
            text-4xl sm:text-5xl
            font-extrabold text-white
          "
                >
                    {Math.round(temp)}°C
                </p>
            </div>

            {/* Description */}
            <p
                className="
          text-center capitalize
          text-gray-300 mt-2
          text-sm sm:text-base
        "
            >
                {description}
            </p>

            {/* Extra Info */}
            <div
                className="
          grid grid-cols-2 gap-4 mt-6
          text-center
        "
            >
                <div className="bg-black/30 rounded-xl p-3">
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Humidity
                    </p>
                    <p className="text-white font-semibold">
                        {humidity}%
                    </p>
                </div>

                <div className="bg-black/30 rounded-xl p-3">
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Wind Speed
                    </p>
                    <p className="text-white font-semibold">
                        {speed} m/s
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
