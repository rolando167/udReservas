import PropTypes from 'prop-types';

const Reserva = ({reserva, eliminarReserva}) => {
    return (
        <div className="reserva">
            <p>Persona: <span>{reserva.persona}</span> </p>
            <p>Cantidad: <span>{reserva.cantidad}</span> </p>
            <p>Fecha: <span>{reserva.fecha}</span> </p>
            <p>Reserva: <span>{reserva.hora}</span> </p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarReserva(reserva.id)}
            >Eliminar</button>
        </div>
    );
}
Reserva.prototype = {
    reserva: PropTypes.object.isRequired,
    eliminarReserva: PropTypes.func.isRequired
}
export default Reserva;