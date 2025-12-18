const ErrorMessage = ({ message }) => {
    return (
        <div
            className="
        max-w-md mx-auto mt-6
        bg-red-500/10 backdrop-blur
        border border-red-500/30
        rounded-xl p-4
        text-center text-red-400
      "
            role="alert"
        >
            ⚠️ {message}
        </div>
    );
};

export default ErrorMessage;
