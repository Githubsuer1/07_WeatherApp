const WeatherSkeleton = () => {
    return (
        <div
            className="
        w-full max-w-md mx-auto mt-8
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl p-6
        animate-pulse
      "
        >
            <div className="h-6 bg-white/20 rounded w-1/2 mx-auto"></div>

            <div className="flex justify-center gap-4 mt-6">
                <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                <div className="h-12 bg-white/20 rounded w-24 mt-4"></div>
            </div>

            <div className="h-4 bg-white/20 rounded w-2/3 mx-auto mt-4"></div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="h-16 bg-white/20 rounded-xl"></div>
                <div className="h-16 bg-white/20 rounded-xl"></div>
            </div>
        </div>
    );
};

export default WeatherSkeleton;
