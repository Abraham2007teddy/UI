import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTelegram, FaWhatsapp, FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const API_URL = "http://localhost:8002/api/contacts/";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newContact, setNewContact] = useState({ username: "", phone_1: "", phone_2: "" });

  // Fetch contacts from API
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setContacts(response.data);
        setFilteredContacts(response.data);
      })
      .catch(error => console.error("Error fetching contacts:", error));
  }, []);

  // Search Filter Function
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const filtered = contacts.filter(contact =>
      contact.username.toLowerCase().includes(query) ||
      contact.phone_1.includes(query) ||
      (contact.phone_2 && contact.phone_2.includes(query))
    );

    setFilteredContacts(filtered);
  };

  // Handle input change
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  // Handle form submission (Add/Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editIndex !== null) {
        // Update an existing contact
        const updatedContact = await axios.put(`${API_URL}${filteredContacts[editIndex].id}/`, newContact);
        const updatedContacts = contacts.map((contact, i) =>
          i === editIndex ? updatedContact.data : contact
        );
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
      } else {
        // Add new contact
        const response = await axios.post(API_URL, newContact);
        setContacts([...contacts, response.data]);
        setFilteredContacts([...contacts, response.data]);
      }
    } catch (error) {
      console.error("Error saving contact:", error);
    }

    // Reset form and close modal
    setNewContact({ username: "", phone_1: "", phone_2: "" });
    setShowForm(false);
    setEditIndex(null);
  };

  // Handle edit contact
  const handleEdit = (index) => {
    setNewContact(filteredContacts[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  // Handle delete contact
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`${API_URL}${id}/`);
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };
  
  const { t } = useTranslation();

  return (
    <div className="container my-4">
      <div className="my-3 p-3 bg-white text-black rounded shadow-sm">
        {/* Header with Search & Add Contact */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Search Bar - Left */}
          <div className="d-flex align-items-center" style={{ width: "300px" }}>
            <FaSearch size={18} className="me-2 text-muted" />
            <input
              type="text"
              className="form-control"
              placeholder={t('Search_contacts')}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Centered Title */}
          <h5 className="fw-bold text-center flex-grow-1" style={{ marginRight: '40px' }}>{t('Contacts')}</h5>

          {/* Add Contact Button - Right */}
          <button
            className="btn btn-dark btn-sm px-3"
            onClick={() => {
              setShowForm((prev) => !prev); // Toggles form visibility
              if (!showForm) {
                setNewContact({ username: "", phone_1: "", phone_2: "" });
                setEditIndex(null);
              }
            }}
            title="Add Contact"
            style={{ width: "200px" }}
          >
            <FaPlus size={15} className="mb-1 me-1" /> {t('Add_Contact')}
          </button>

        </div>
        <hr />

        {/* Contact List */}
        {filteredContacts.map((contact, index) => (
          <div key={contact.id} className="d-flex align-items-center text-dark pt-3">
            {/* Avatar */}
            <div
              className="d-flex justify-content-center align-items-center rounded-circle"
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "black",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                boxShadow: "0px 0px 10px rgba(44, 39, 39, 0.8)",
                border: "2px solid white",
                textTransform: "uppercase",
              }}
            >
              {contact.username.charAt(0).toUpperCase()}
            </div>

            {/* Username - Fixed Width */}
            <strong 
              className="text-dark ms-3"
              style={{ minWidth: "220px", whiteSpace: "nowrap" }}
            >
              {contact.username}
            </strong>

            {/* Phone Numbers - Aligned to Center */}
            <div className="flex-grow-1 text-center">
              <h5>{contact.phone_1}{contact.phone_2 ? ` / ${contact.phone_2}` : ""}</h5>
            </div>

            {/* Social Media Icons */}
            <div className="d-flex align-items-center">
              <div className="me-3">
                <a
                  href={`https://t.me/${contact.phone_1.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                  title="Message on Telegram"
                  style={{ color: "black" }}
                >
                  <FaTelegram size={30} />
                </a>
                <a
                  href={`https://wa.me/${contact.phone_1.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                  title="Message on WhatsApp"
                  style={{ color: "black" }}
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>

              {/* Edit & Delete Icons */}
              <div>
                <button className="btn btn-sm" onClick={() => handleEdit(index)} title={t('edit')}>
                  <FaEdit size={20} color="black" />
                </button>
                <button className="btn btn-sm" onClick={() => handleDelete(contact.id)} title={t('delete')}>
                  <FaTrash size={20} color="black" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <hr className="mt-4" />
        <small className="d-block text-end mt-2 text-dark">
          <h6>{t('Please')}</h6>
        </small>
      </div>

      {/* Add/Edit Contact Form (Popup) */}
      {showForm && (
        <div
          className="position-fixed top-50 start-50 translate-middle p-4 rounded shadow-lg bg-white"
          style={{
            zIndex: 1050,
            width: "300px",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
          }}
        >
          <h6 className="mb-3">{editIndex !== null ? "Edit Contact" : "Add Contact"}</h6>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-2" name="username" value={newContact.username} onChange={handleChange} placeholder={t('Username')} required />
            <input type="text" className="form-control mb-2" name="phone_1" value={newContact.phone_1} onChange={handleChange} placeholder={t('Phone_1')} required />
            <input type="text" className="form-control mb-3" name="phone_2" value={newContact.phone_2} onChange={handleChange} placeholder={t('Phone_2')} />
            <button type="submit" className="btn btn-dark w-100">{t('Save')}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contacts;
