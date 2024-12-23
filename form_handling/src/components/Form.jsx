const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault(e);
    console.log("Hello");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <label className="block text-gray-700 font-semibold mb-2">
          Enter Text:
        </label>
        <input
          placeholder="Type something..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
