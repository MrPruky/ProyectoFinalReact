
import React, { useState } from 'react';

function Productos({ productos }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProductos = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="productos" id="productos">
      <h2>Nuestros Productos</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="products-grid">
        {filteredProductos.length > 0 ? (
          filteredProductos.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.imagen} alt={item.nombre} />
              <p className="product-name">{item.nombre}</p>
              <p className="product-price">{item.precio}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </section>
  );
}

export default Productos;
