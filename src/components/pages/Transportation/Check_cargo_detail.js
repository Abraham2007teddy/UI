import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaCheck, FaTimes, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaBuilding, FaUserAlt, FaBoxOpen, FaRegNewspaper, FaUserShield } from 'react-icons/fa'; // Import icons
import { useTranslation } from 'react-i18next';

const API_URL = 'http://127.0.0.1:8004/api/cargo-requests/';

const CargoDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // useNavigate hook for navigation
    const [cargo, setCargo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t } = useTranslation();

    // For Edit Form
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        company_address: '',
        contact_name: '',
        contact_surname: '',
        contact_phone: '',
        email: '',
        cargo_type: '',
        description: '',
        agree_privacy_policy: false,
        agree_promotions: false,
    });

    useEffect(() => {
        const fetchCargo = async () => {
            try {
                const response = await axios.get(`${API_URL}${id}/`);
                setCargo(response.data);
                setFormData(response.data); // Set initial form data to cargo details
            } catch (err) {
                setError('Error fetching cargo details.');
            } finally {
                setLoading(false);
            }
        };
        fetchCargo();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm(t('cargo_details'));
        if (!confirmDelete) return;
    
        try {
            await axios.delete(`${API_URL}${id}/`);
            navigate(-1); // Redirect to previous page
        } catch (err) {
            setError('Error deleting cargo request.');
        }
    };
    

    const handleEditToggle = () => {
        setIsEditing((prevState) => !prevState);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}${id}/`, formData);
            setCargo(formData); // Update cargo details locally
            setIsEditing(false); // Close the edit form
            navigate(-1); // Redirects to the previous page after successful edit
        } catch (err) {
            setError('Error updating cargo details.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!cargo) return <p>Cargo not found.</p>;

    return (
        <div className="container mt-2 mb-5">
            <h2 className="text-center mb-4">{t('Cargo_Details')}</h2>
            <div className="card shadow-lg border-0 rounded-3 p-4">
                <h5 className="text-dark mb-4">
                    <FaMapMarkedAlt className="me-2" />
                    {cargo.from_country} → {cargo.to_country}
                </h5>

                {isEditing ? (
                    <form onSubmit={handleSubmitEdit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label"><FaBuilding className="me-2" />{t("company_name")}</label>
                                <input type="text" className="form-control" name="company_name" value={formData.company_name} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaMapMarkedAlt className="me-2" />{t("company_address")}</label>
                                <input type="text" className="form-control" name="company_address" value={formData.company_address} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaUserAlt className="me-2" />{t("contact_name")}</label>
                                <input type="text" className="form-control" name="contact_name" value={formData.contact_name} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaPhoneAlt className="me-2" />{t("contact_phone_detail")}</label>
                                <input type="text" className="form-control" name="contact_phone" value={formData.contact_phone} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label"><FaEnvelope className="me-2" />{t("email")}</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaBoxOpen className="me-2" />{t("cargo_type")}</label>
                                <input type="text" className="form-control" name="cargo_type" value={formData.cargo_type} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaRegNewspaper className="me-2" />{t("description")}</label>
                                <textarea className="form-control" name="description" value={formData.description} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaUserShield className="me-2" />{t("agree_privacy_policy")}</label>
                                <input type="checkbox" className="form-check-input" name="agree_privacy_policy" checked={formData.agree_privacy_policy} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaUserShield className="me-2" />{t("agree_promotions")}</label>
                                <input type="checkbox" className="form-check-input" name="agree_promotions" checked={formData.agree_promotions} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" type="submit">
                            <FaCheck className="me-2" />
                            {t("save_changes")}
                        </button>
                        <button className="btn btn-secondary ml-2" type="button" onClick={handleEditToggle}>
                            <FaTimes className="me-2" />
                            {t("cancel")}
                        </button>
                    </div>
                </form>
                ) : (
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label"><FaBuilding className="me-2" />{t("company_name")}</label>
                                <div className="p-2 border rounded bg-light">{cargo.company_name}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaMapMarkedAlt className="me-2" />{t("company_address")}</label>
                                <div className="p-2 border rounded bg-light">{cargo.company_address}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaUserAlt className="me-2" />{t("contact_name")}</label>
                                <div className="p-2 border rounded bg-light">{cargo.contact_name} {cargo.contact_surname}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaPhoneAlt className="me-2" />{t("contact_phone")}</label>
                                <div className="p-2 border rounded bg-light">{cargo.contact_phone}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label"><FaEnvelope className="me-2" />{t("email")}</label>
                                <div className="p-2 border rounded bg-light">{cargo.email}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaBoxOpen className="me-2" />{t("cargo_type")}</label>
                                <div className="p-2 border rounded bg-light">{cargo.cargo_type}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaRegNewspaper className="me-2" />{t("description")}</label>
                                <div className="p-2 border rounded bg-light" style={{ whiteSpace: 'pre-line' }}>
                                    {cargo.description}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaUserShield className="me-2" />{t("agree_privacy_policy")}</label>
                                <span className={`badge ${cargo.agree_privacy_policy ? 'bg-success' : 'bg-danger'}`} style={{ marginLeft: "5px" }}>
                                    {cargo.agree_privacy_policy ? t("yes") : t("no")}
                                </span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaUserShield className="me-2" />{t("agree_promotions")}</label>
                                <span className={`badge ${cargo.agree_promotions ? 'bg-success' : 'bg-danger'}`} style={{ marginLeft: "5px" }}>
                                    {cargo.agree_promotions ? t("yes") : t("no")}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center mt-4">
                    <button className="btn btn-outline-danger mr-2" onClick={handleDelete} style={{ marginLeft: "30px" }}>
                        <FaTrashAlt className="me-2" />
                        {t("delete_cargo")}
                    </button>
                    <button className="btn btn-outline-primary" onClick={handleEditToggle} style={{ marginLeft: "20px" }}>
                        <FaEdit className="me-2" />
                        {t("edit_cargo_details")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CargoDetail;
