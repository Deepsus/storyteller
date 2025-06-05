/* eslint-disable react/prop-types */
function LabeledInput({
  label,
  placeholder,
  type,
  Icon,
  inputValue,
  setInputValue,
  disabled = false,
}) {
  return (
    <div className="mb-6">
      <label className="text-gray-700 text-lg font-bold mb-2 flex items-center">
        <span className=" mr-2 align-middle text-xl">{Icon && <Icon />}</span>
        {label}
      </label>

      <div className="">
        <input
          type={`${type}`}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-relaxed  focus:outline-blue-600 disabled:bg-gray-200"
          placeholder={`${placeholder}`}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          autoComplete="true"
          required={true}
          min={1}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default LabeledInput;
