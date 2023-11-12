import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactListItem() {
  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://boolean-api-server.fly.dev/Callumhayden99/contact/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch contact data");
        }
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setContact(null);
      }
    };

    fetchContact();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const removeContact = () => {
    fetch(`https://boolean-api-server.fly.dev/Callumhayden99/contact/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/contact/list");
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  if (contact === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list-item">
      <h2 className="list-item-name">
        {`${contact.firstName} ${contact.lastName}`}
      </h2>
      <div className="street-city">
        {`${contact.street} ${contact.city}`}
      </div>
      <button className="back-button" onClick={handleGoBack}>
        Back
      </button>
      <button className="delete-button" onClick={removeContact}>
        Delete
      </button>
    </div>
  );
}

export default ContactListItem;
