// import React, { useState } from 'react';

// const Clases = () => {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     correo: '',
//     mensaje: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert('Formulario enviado');
//   };

//   return (
//     <div className="clases-page">
//       <h1>Clases de Tenis de Mesa</h1>
//       <div className="clases-info">
//         <h2>Información</h2>
//         <ul>
//           <li><strong>Días:</strong> Martes y Jueves</li>
//           <li><strong>Horario:</strong> 18:00 - 20:00</li>
//           <li><strong>Profesor:</strong> Iñaki Aspiroz</li>
//         </ul>
//       </div>

//       <div className="formulario-inscripcion">
//         <h2>Formulario de Inscripción</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="nombre">Nombre</label>
//             <input
//               type="text"
//               id="nombre"
//               name="nombre"
//               value={formData.nombre}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="correo">Correo Electrónico</label>
//             <input
//               type="email"
//               id="correo"
//               name="correo"
//               value={formData.correo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="mensaje">Mensaje</label>
//             <textarea
//               id="mensaje"
//               name="mensaje"
//               value={formData.mensaje}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Enviar</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Clases;
