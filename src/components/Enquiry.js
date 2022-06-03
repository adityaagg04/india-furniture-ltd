import React, { useState } from "react";

const Enquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(enquiry);
  };

  return (
    <>
      <main className="enquiry-container" onSubmit={(e) => handleSubmit(e)}>
        <form className="form-area">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="enquiry-input"
          ></input>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone"
            className="enquiry-input"
          ></input>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="enquiry-input"
          ></input>
          <textarea
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
            placeholder="Write Your Query Here..."
            className="enquiry-text"
          ></textarea>
          <button type="submit" className="enquiry-submit-btn">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Enquiry;
