import { useState } from "react";

const TwoWayBinding = () => {
  const [user, setUser] = useState(""); // Initialize the user state as an empty string

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(user); // Log the current value of the input
    setUser(""); // Clear the input field after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmit} // Call the onSubmit handler when the form is submitted
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <label
          htmlFor="inputField"
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter Text:
        </label>
        <input
          id="inputField"
          type="text"
          value={user} // Bind the input value to the user state
          onChange={(e) => setUser(e.target.value)} // Update state on input change
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

export default TwoWayBinding;
