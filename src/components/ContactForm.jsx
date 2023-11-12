import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const newContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

function ContactForm() {
  const [newUser, setNewUser] = useState(newContact);
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to create contact");
      }

      const data = await response.json();
      // Do something with the data if needed

      navigation("/");
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="create-contact">Create Contact</h2>

      <div className="form-tabs">
        {["firstName", "lastName", "street", "city"].map((field) => (
          <label key={field} htmlFor={field}>
            {field === "firstName" ? "First Name" : field.charAt(0).toUpperCase() + field.slice(1)}:
            <input
              id={field}
              name={field}
              type="text"
              required
              value={newUser[field]}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>

      <div className="actions-section">
        <button className="button-blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
