import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight, FaBox, FaMapMarkedAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const API_URL = 'http://127.0.0.1:8004/api/cargo-requests/';

const CargoList = () => {
    const { t } = useTranslation();
    const [cargos, setCargos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCargos = async () => {
            try {
                const response = await axios.get(API_URL);
                
                // Sorting by 'created_at' (Newest first)
                const sortedCargos = response.data.sort((a, b) => 
                    new Date(b.created_at) - new Date(a.created_at)
                );

                setCargos(sortedCargos);
            } catch (err) {
                setError(t('errorFetchingCargo'));
            } finally {
                setLoading(false);
            }
        };

        fetchCargos();
    }, [t]);    

    if (loading) return <p className='d-flex justify-content-center'>{t('loading_cargo')}</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">{t('cargoRequests')}</h2>
            <div className="list-group">
                {cargos.map((cargo) => (
                    <div key={cargo.id} className="list-group-item d-flex justify-content-between align-items-center shadow-sm rounded-3 mb-3 p-4 bg-light">
                        <div>
                            <h5 className="mb-1 text-dark">
                                <FaMapMarkedAlt className="me-2" />{cargo.from} → {cargo.to}
                            </h5>
                            <p className="mb-0 text-muted">
                                <FaBox className="me-2" /> {t('cargoType')}: <strong>{cargo.cargo_type}</strong>
                            </p>
                            <h6 className="text-dark mb-4">
                                <FaArrowRight className="me-2" />{cargo.from_country} → {cargo.to_country}
                            </h6>
                        </div>
                        <Link to={`/cargo/${cargo.id}`} className="btn btn-outline-dark btn-md">{t('viewDetails')}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CargoList;
