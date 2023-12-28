import React, { useEffect } from "react";

export const Contact = () => {
  return (
    <div className="m-auto">
      <h1>Contact Us</h1>
      <div className="flex-row">
        <input
          type="text"
          className="h-12 bg-slate-50 rounded m-1 px-2 focus:bg-pink-100 text-[grey] focus:outline-pink-200"
          placeholder="restaurant name"
        />
        <input
          type="text"
          className="h-12 bg-slate-50 rounded m-1 px-2 focus:bg-pink-100 text-[grey] focus:outline-pink-200"
          placeholder="address"
        />
        <button
          className="bg-blue-500 font-medium outline-none text-md text-white rounded p-2 h-12 w-24 m-1"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
