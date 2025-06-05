export default function FileUpload({
    label,
    Icon,
    setInputValue,
    disabled = false,
    fileAccept = "",
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
                <input
                    type="file"
                    accept={fileAccept}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-relaxed focus:outline-blue-600 disabled:bg-gray-200 cursor-pointer"
                    onChange={(e) => setInputValue(e.target.files[0])}
                    disabled={disabled}
                    required={true}
                />
            </div>
        </div>
    );
}
