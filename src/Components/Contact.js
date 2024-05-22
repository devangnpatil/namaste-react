import React from "react";
const Contact = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="Enter your message"
        />
        <button className="border border-black p-2 m-2 bg-gray-50 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
