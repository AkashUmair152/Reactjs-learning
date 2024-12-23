const SuggestionList = ({ suggestions }) => {
  return (
    <ul className="mt-2 max-w-sm mx-auto bg-white border border-gray-200 rounded-md shadow-lg">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-100"
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
