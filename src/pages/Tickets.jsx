import React, { useState } from 'react';
import '../styles/Tickets.css'; // Importa el CSS específico para Entradas

const Tickets = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    quantity: 1,
  });

  const [errors, setErrors] = useState({});
  const [validationStates, setValidationStates] = useState({}); // Para el verde/rojo
  const [isPurchasing, setIsPurchasing] = useState(false); // Para la carga
  const [purchaseSuccess, setPurchaseSuccess] = useState(false); // Para el modal de éxito

  const ticketPrice = 20000; // $20.000 pesos argentinos

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
      case 'fullName':
        if (!value.trim()) {
          error = 'El nombre completo es obligatorio.';
        } else if (value.trim().length < 3) {
          error = 'El nombre debe tener al menos 3 caracteres.';
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
      case 'phone':
        if (!value.trim()) {
          error = 'El número de teléfono es obligatorio.';
        } else if (!/^\d{10,}$/.test(value)) { // Mínimo 10 dígitos (ajusta si necesitas prefijos/guiones)
          error = 'El número de teléfono no es válido (mínimo 10 dígitos).';
        } else {
          isValid = true;
        }
        break;
      case 'cardNumber':
        // Validación básica de tarjeta de 16 dígitos. No hace validación de algoritmo de Luhn
        if (!value.trim()) {
          error = 'El número de tarjeta es obligatorio.';
        } else if (!/^\d{16}$/.test(value.replace(/\s/g, ''))) { // Acepta espacios pero valida 16 dígitos numéricos
          error = 'El número de tarjeta debe tener 16 dígitos.';
        } else {
          isValid = true;
        }
        break;
      case 'expiryDate':
        // Formato MM/AA
        if (!value.trim()) {
          error = 'La fecha de vencimiento es obligatoria.';
        } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
          error = 'Formato MM/AA inválido (ej: 12/27).';
        } else {
          const [month, year] = value.split('/').map(Number);
          const currentYear = new Date().getFullYear() % 100; // Últimos 2 dígitos
          const currentMonth = new Date().getMonth() + 1; // getMonth() es 0-11

          if (year < currentYear || (year === currentYear && month < currentMonth)) {
            error = 'La tarjeta está vencida.';
          } else {
            isValid = true;
          }
        }
        break;
      case 'cvv':
        if (!value.trim()) {
          error = 'El CVV es obligatorio.';
        } else if (!/^\d{3,4}$/.test(value)) { // 3 o 4 dígitos
          error = 'El CVV no es válido (3 o 4 dígitos).';
        } else {
          isValid = true;
        }
        break;
      case 'quantity':
        if (value <= 0) {
          error = 'La cantidad debe ser al menos 1.';
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
    const fieldsToValidate = ['fullName', 'email', 'phone', 'cardNumber', 'expiryDate', 'cvv', 'quantity'];
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
      setIsPurchasing(true); // Inicia el estado de carga
      setTimeout(() => {
        setIsPurchasing(false);
        setPurchaseSuccess(true); // Muestra el modal de éxito
        // Limpiar el formulario
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          quantity: 1,
        });
        setErrors({});
        setValidationStates({}); // Limpiar estados de validación de borde
      }, 2000); // Simula una carga de 2 segundos
    } else {
      alert('Por favor, corrige los errores en el formulario antes de continuar.');
    }
  };

  const closeSuccessModal = () => {
    setPurchaseSuccess(false);
  };

  const getTotalPrice = () => {
    return formData.quantity * ticketPrice;
  };

  return (
    <div className="tickets-container">
      <h1 className="tickets-title">Compra tus Entradas</h1>

      <div className="tickets-form-card">
        <p className="ticket-price-info">
          Entrada General: <span className="ticket-price-value">${ticketPrice.toLocaleString('es-AR')} ARS</span>
        </p>

        <form onSubmit={handleSubmit} className="tickets-form">
          {/* Campo: Nombre Completo */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`form-input ${validationStates.fullName === 'error' ? 'input-error' : ''} ${validationStates.fullName === 'success' ? 'input-success' : ''}`}
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          </div>

          {/* Campo: Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${validationStates.email === 'error' ? 'input-error' : ''} ${validationStates.email === 'success' ? 'input-success' : ''}`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          {/* Campo: Número de Teléfono */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Número de Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-input ${validationStates.phone === 'error' ? 'input-error' : ''} ${validationStates.phone === 'success' ? 'input-success' : ''}`}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>

          <hr className="form-divider" /> {/* Separador para datos de pago */}

          <h3 className="payment-details-title">Datos de Pago</h3>

          {/* Campo: Número de Tarjeta */}
          <div className="form-group">
            <label htmlFor="cardNumber" className="form-label">
              Número de Tarjeta:
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength="19" // 16 dígitos + 3 espacios
              className={`form-input ${validationStates.cardNumber === 'error' ? 'input-error' : ''} ${validationStates.cardNumber === 'success' ? 'input-success' : ''}`}
              value={formData.cardNumber}
              onChange={(e) => {
                let value = e.target.value.replace(/\s/g, ''); // Eliminar espacios
                value = value.replace(/(\d{4})/g, '$1 ').trim(); // Agregar espacios cada 4 dígitos
                if (value.length <= 19) { // Limitar a 16 dígitos + 3 espacios
                  handleChange({ target: { name: 'cardNumber', value: value } });
                }
              }}
              onBlur={handleBlur}
            />
            {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
          </div>

          <div className="form-row">
            {/* Campo: Fecha de Vencimiento */}
            <div className="form-group half-width">
              <label htmlFor="expiryDate" className="form-label">
                Fecha de Vencimiento (MM/AA):
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/AA"
                maxLength="5"
                className={`form-input ${validationStates.expiryDate === 'error' ? 'input-error' : ''} ${validationStates.expiryDate === 'success' ? 'input-success' : ''}`}
                value={formData.expiryDate}
                onChange={(e) => {
                  let value = e.target.value;
                  if (value.length === 2 && !value.includes('/')) {
                    value = value + '/';
                  }
                  handleChange({ target: { name: 'expiryDate', value: value } });
                }}
                onBlur={handleBlur}
              />
              {errors.expiryDate && <p className="error-message">{errors.expiryDate}</p>}
            </div>

            {/* Campo: CVV */}
            <div className="form-group half-width">
              <label htmlFor="cvv" className="form-label">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                maxLength="4"
                className={`form-input ${validationStates.cvv === 'error' ? 'input-error' : ''} ${validationStates.cvv === 'success' ? 'input-success' : ''}`}
                value={formData.cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Solo números
                  handleChange({ target: { name: 'cvv', value: value } });
                }}
                onBlur={handleBlur}
              />
              {errors.cvv && <p className="error-message">{errors.cvv}</p>}
            </div>
          </div>

          <hr className="form-divider" /> {/* Otro separador */}

          {/* Campo: Cantidad de Entradas */}
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">
              Cantidad de Entradas:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              className={`form-input ${validationStates.quantity === 'error' ? 'input-error' : ''} ${validationStates.quantity === 'success' ? 'input-success' : ''}`}
              value={formData.quantity}
              onChange={(e) => handleChange({ target: { name: 'quantity', value: parseInt(e.target.value) || 0 } })}
              onBlur={handleBlur}
            />
            {errors.quantity && <p className="error-message">{errors.quantity}</p>}
          </div>

          <div className="total-display">
            Total: <span className="total-value">${getTotalPrice().toLocaleString('es-AR')} ARS</span>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isPurchasing} // Deshabilita el botón durante la carga
          >
            {isPurchasing ? 'Procesando Compra...' : 'Comprar'}
          </button>
        </form>
      </div>

      {/* Modal de Éxito */}
      {purchaseSuccess && (
        <div className="modal-overlay">
          <div className="purchase-success-modal">
            <h2 className="modal-title">¡Compra Realizada con Éxito!</h2>
            <p className="modal-message">
              Tus entradas han sido procesadas. Recibirás un email de confirmación en breve.
            </p>
            <button onClick={closeSuccessModal} className="modal-close-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;