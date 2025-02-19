import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrashAlt } from "react-icons/fa";

const Messages = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api4/get-messages/");
        if (!response.ok) {
          throw new Error(t("fetch_error", "Failed to fetch messages"));
        }
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (index) => {
    const confirmDelete = window.confirm(t("confirm_delete", "Are you sure you want to delete this message?"));
    if (!confirmDelete) return;
    
    try {
      const response = await fetch(`http://localhost:8000/api4/delete-message/${messages[index].id}/`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(t("delete_error", "Failed to delete message"));
      }
      setMessages(messages.filter((_, i) => i !== index));
    } catch (err) {
      console.error(t("delete_error_log", "Error deleting message:"), err);
    }
  };

  if (loading) return <div className="alert alert-info">{t("loading", "Loading messages...")}</div>;
  if (error) return <div className="alert alert-danger">{t("error", "Error:")} {error}</div>;

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h2 className="mb-0">{t("messages", "Messages")}</h2>
        </div>
        <div className="card-body">
          {messages.length > 0 ? (
            <ul className="list-group">
              {messages.map((message, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">{message.name}</h5>
                    <p className="mb-1"><strong>{t("email", "Email")}:</strong> {message.email}</p>
                    <p className="mb-0"><strong>{t("question", "Question")}:</strong> {message.question}</p>
                  </div>
                  <FaTrashAlt className="text-black cursor-pointer" onClick={() => handleDelete(index)} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="alert alert-warning">{t("no_messages", "No messages found.")}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
