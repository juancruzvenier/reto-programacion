import React, { useState } from 'react';
import '../styles/Contact.css'; // Asegúrate de que este import esté presente

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [validationStates, setValidationStates] = useState({}); // Nuevo estado para el verde/rojo

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar el error y el estado de validación al escribir
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
    if (validationStates[name]) {
      setValidationStates((prevStates) => ({ ...prevStates, [name]: '' }));
    }
  };

  const validateField = (name, value) => {
    let error = '';
    let isValid = false;

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'El nombre es obligatorio.';
        } else if (value.trim().length < 2) {
          error = 'El nombre debe tener al menos 2 caracteres.';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'El nombre solo puede contener letras y espacios.';
        } else {
          isValid = true;
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'El email es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'El email no es válido.';
        } else {
          isValid = true;
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'El mensaje es obligatorio.';
        } else if (value.trim().length < 10) {
          error = 'El mensaje debe tener al menos 10 caracteres.';
        } else {
          isValid = true;
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setValidationStates((prevStates) => ({ ...prevStates, [name]: isValid ? 'success' : 'error' }));
    return isValid;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateAllFields = () => {
    let allValid = true;
    const fieldsToValidate = ['name', 'email', 'message'];
    fieldsToValidate.forEach((field) => {
      if (!validateField(field, formData[field])) {
        allValid = false;
      }
    });
    return allValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAllFields()) {
      alert(`¡Mensaje enviado con éxito!\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
      // Aquí se enviaría el mensaje a un servidor real o servicio de email
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
      setValidationStates({}); // Limpiar estados de validación de borde
    } else {
      alert('Por favor, corrige los errores en el formulario antes de enviar.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>

      <div className="contact-content-grid">
        {/* Formulario de Contacto */}
        <div className="contact-form-card">
          <h2 className="contact-form-title">Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contactName" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                id="contactName"
                name="name" // Asegúrate de que el atributo 'name' coincida con el estado
                className={`form-input ${validationStates.name === 'error' ? 'input-error' : ''} ${validationStates.name === 'success' ? 'input-success' : ''}`}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="contactEmail" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="contactEmail"
                name="email" // Asegúrate de que el atributo 'name' coincida con el estado
                className={`form-input ${validationStates.email === 'error' ? 'input-error' : ''} ${validationStates.email === 'success' ? 'input-success' : ''}`}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message" // Asegúrate de que el atributo 'name' coincida con el estado
                rows="5"
                className={`form-input textarea ${validationStates.message === 'error' ? 'input-error' : ''} ${validationStates.message === 'success' ? 'input-success' : ''}`}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="submit-button"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Mapa de Ubicación */}
        <div className="contact-map-card">
          <h2 className="contact-map-title">Nuestra Ubicación</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14243.680219662892!2d-64.26909839999999!3d-27.79720415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5220c45d3159%3A0x7d0e4f4c2e6f4a7a!2sPlaza%20Libertad!5e0!3m2!1ses-419!2sar!4v1719586100000!5m2!1ses-419!2sar" // Ejemplo de Plaza Libertad en Santiago del Estero
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
          </div>
          <p className="location-text">
            Plaza Libertad, Santiago del Estero. ¡Te esperamos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;