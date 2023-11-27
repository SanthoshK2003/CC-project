import React, { useState } from "react";
import "./ContactUs.css";
import MenuApBar from "./Navbar2";
import Footer2 from "./Footer2";
import { Stack } from "@mui/material";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to server or API)
    toast.success("Your Request is Submiited Successfully");
    console.log("Form submitted:", formData);
    // You can reset the form after submission if needed
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
    <div className="out">
        <MenuApBar></MenuApBar>
    <div className="contact-us-container">
     <center>
         <h2>Contact Us</h2>
        </center>
        <br></br>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" marginLeft="200px">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        </Stack>
      </form>
    </div>
    </div>
    <Footer2></Footer2>
    </div>
  );
};

export default ContactUs;