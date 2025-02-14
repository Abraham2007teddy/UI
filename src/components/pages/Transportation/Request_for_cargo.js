import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/images/MMSH/history/logo.png';
import './Request_for_cargo.css';
import { faBuilding, faMapMarkerAlt, faUser, faPhone, faEnvelope, faGlobe, faBoxOpen, faClipboardList } from '@fortawesome/free-solid-svg-icons';

import TextInput from './mini_Transportation/TextInput';
import SelectInput from './mini_Transportation/SelectInput';
import CheckboxInput from './mini_Transportation/CheckboxInput';

const SignInForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Form states
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [description, setDescription] = useState('');
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
  const [agreePromotions, setAgreePromotions] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Country list state
  const [countryOptions, setCountryOptions] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  
  // Fetch countries from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryList = response.data.map(country => country.name.common).sort();
        setCountryOptions(countryList);
        setCountryLoading(false);
      } catch (error) {
        console.error("Error fetching country list:", error);
        setCountryOptions(["USA", "Canada", "UK"]); // Fallback options
        setCountryLoading(false);
      }
    };
    
    fetchCountries();
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      company_name: companyName,
      company_address: companyAddress,
      contact_name: contactName,
      contact_surname: contactSurname,
      contact_phone: contactPhone,
      email: email,
      from_country: fromCountry,
      to_country: toCountry,
      cargo_type: cargoType,
      description: description,
      agree_privacy_policy: agreePrivacyPolicy,
      agree_promotions: agreePromotions,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8004/api/cargo-requests/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Success:', response.data);
      alert(t('form.success'));
      navigate('/Succes');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert(t('form.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '350px', marginBottom: '350px' }}>
      <main className="form-signin p-4 border rounded shadow" style={{ backgroundColor: '#f8f9fa' }}>
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src={logo} alt="" width="150px" style={{ display: 'block', margin: 'auto', borderRadius: '4%' }} />

          <h5 className="h4 mb-3 fw-bold text-center">{t('form.aboutCompany')}</h5>
          <TextInput id="companyName" label={t('form.companyName')} value={companyName} onChange={(e) => setCompanyName(e.target.value)} icon={faBuilding} required />
          <TextInput id="companyAddress" label={t('form.companyAddress')} value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} icon={faMapMarkerAlt} required />

          <h5 className="h4 mb-3 fw-bold text-center">{t('form.contactInfo')}</h5>
          <TextInput id="contactName" label={t('form.contactName')} value={contactName} onChange={(e) => setContactName(e.target.value)} icon={faUser} required />
          <TextInput id="contactSurname" label={t('form.contactSurname')} value={contactSurname} onChange={(e) => setContactSurname(e.target.value)} icon={faUser} required />
          <TextInput id="contactPhone" label={t('form.contactPhone')} value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} icon={faPhone} required />
          <TextInput id="email" label={t('form.email')} value={email} onChange={(e) => setEmail(e.target.value)} icon={faEnvelope} type="email" required />

          <h5 className="h4 mb-3 fw-bold text-center">{t('form.cargoDetails')}</h5>

          {/* Country dropdowns */}
          <SelectInput
            id="fromCountry"
            label={t('form.fromCountry')}
            value={fromCountry}
            onChange={(e) => setFromCountry(e.target.value)}
            icon={faGlobe}
            options={countryOptions}
            required
            disabled={countryLoading}
          />
          <SelectInput
            id="toCountry"
            label={t('form.toCountry')}
            value={toCountry}
            onChange={(e) => setToCountry(e.target.value)}
            icon={faGlobe}
            options={countryOptions}
            required
            disabled={countryLoading}
          />

          <TextInput id="cargoType" label={t('form.cargoType')} value={cargoType} onChange={(e) => setCargoType(e.target.value)} icon={faBoxOpen} required />
          <TextInput id="description" label={t('form.description')} value={description} onChange={(e) => setDescription(e.target.value)} icon={faClipboardList} required rows={8} style={{ height: '100px' }} />

          <CheckboxInput id="agreePrivacyPolicy" label={t('form.privacyPolicy')} checked={agreePrivacyPolicy} onChange={(e) => setAgreePrivacyPolicy(e.target.checked)} required />
          <CheckboxInput id="agreePromotions" label={t('form.promotions')} checked={agreePromotions} onChange={(e) => setAgreePromotions(e.target.checked)} />

          <button className="w-100 btn btn-lg btn-dark" type="submit" disabled={loading}>
            {loading ? t('form.sending') : t('form.send')}
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignInForm;
