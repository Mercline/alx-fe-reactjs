import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Profile Image with hover scale effect */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transition-transform transform hover:scale-110 duration-300 ease-in-out"
      />
      {/* Heading with hover color change */}
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 text-center transition-colors hover:text-blue-500 duration-300 ease-in-out">
        John Doe
      </h1>
      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center transition-opacity hover:opacity-80 duration-300 ease-in-out">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
      {/* Optional Button */}
      <button className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300">
        Follow
      </button>
    </div>
  );
}

export default UserProfile;
