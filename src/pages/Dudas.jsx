//Esta pagina no está funcional porque se tienen que descargar dependencias pero ejemplifica el formulario
import React, { useState } from 'react';


const Dudas = () => {
  const [formData, setFormData] = useState({
    email: '',
    duda: '',
  });

  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.duda) {
      setStatus('Por favor, completa todos los campos.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Por favor, introduce un correo electrónico válido.');
      return;
    }

    console.log('Duda enviada:', formData);
    setStatus('¡Gracias por tu duda! Te responderemos pronto.');

    setFormData({
      email: '',
      duda: '',
    });
  };

  return (
    <section className="dudas" id="dudas">
      <h2>Sección de Dudas</h2>
      <div className="dudas-form-container">
        {status && <div className="status-message">{status}</div>}
        <form className="dudas-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="duda">Tu Duda:</label>
            <textarea
              id="duda"
              name="duda"
              value={formData.duda}
              onChange={handleChange}
              required
              placeholder="Escribe tu duda aquí..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Dudas;
