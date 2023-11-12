import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <header>
        <h1 className="contact-h1">Contacts</h1>
      </header>

      <ul className="contact-list">
        {contacts.map((contact) => (
          <li className="contact" key={contact.id}>
            <div className="name">Name:</div>
            <div className="name-tag">
              {`${contact.firstName} ${contact.lastName}`}
            </div>
            <div className="link">
              <Link to={`/contact/${contact.id}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
