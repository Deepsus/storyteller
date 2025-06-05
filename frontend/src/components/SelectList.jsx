export default function SelectList({
    label,
    Icon,
    inputValue,
    setInputValue,
    disabled = false,
}) {
    return (
        <div className="mb-6">
            <label className="text-gray-700 text-lg font-bold mb-2 flex items-center">
                <span className="mr-2 align-middle text-xl">
                    {Icon && <Icon />}
                </span>
                {label}
            </label>

            <div>
                <select
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-relaxed focus:outline-blue-600 disabled:bg-gray-200"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required={true}
                    disabled={disabled}
                >
                    <option value="">Select genre</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Urban">Urban</option>
                    <option value="Eastern">Eastern</option>
                </select>
            </div>
        </div>
    );
}
