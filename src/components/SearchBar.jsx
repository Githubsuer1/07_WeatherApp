import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSearch(input.trim());
        setInput("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto mt-10 px-4"
        >
            <div
                className="flex items-center gap-2
                            bg-white/10 backdrop-blur-xl
                            border border-white/20
                            rounded-2xl p-2
                            shadow-[0_0_30px_rgba(99,102,241,0.4)]
                            transition-all
                            focus-within:ring-2 focus-within:ring-indigo-500"
            >
                <input
                    type="text"
                    placeholder="Search city..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="
                            flex-1 bg-transparent px-3 py-2
                            text-gray-100 placeholder-gray-400
                            outline-none text-sm sm:text-base"
                />

                <button
                    type="submit"
                    className="
                        px-4 py-2 rounded-xl bg-indigo-600/80
                        hover:bg-indigo-600 text-white font-semibold
                        transition flex items-center gap-2"
                >
                    <FaSearchLocation className="text-lg" />
                    <span className="hidden sm:inline">Search</span>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
