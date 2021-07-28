import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearReserva}) => {
    //Crear State Reservas, con objeto en usetate
    const [reserva, setReserva] = useState({
        persona: '',
        cantidad: '',
        fecha: '',
        hora: '',
        motivo: ''
    });

    const [error, setError] = useState(false);

    //Function que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (e) =>{
        // console.log("escribiendo desde...", e.target.name);
        // console.log("escribiendo valor...", e.target.value);
        setReserva({
            ...reserva,
            [e.target.name]: e.target.value
        });
    }

    //Extraer los valores
    const { persona, cantidad, fecha, hora, motivo} = reserva;

    //cuando presiona agregar reserva
    const submitReserva = (e) =>{
        e.preventDefault();
        // console.log("Enviado Form...");

        // validar
        if(persona.trim() ==='' || cantidad.trim() ===''
            || fecha.trim() ==='' || hora.trim() ==='' || motivo.trim() ===''){
            console.log('Completar todos los Campos!!');
            setError(true);
            return;
        }
        //cambiar mensaje previo
        setError(false);

        // Asignar un ID - instalar: npm i uuid
        reserva.id = uuidv4();

        // Crear la Reserva
        crearReserva(reserva);

        //Reiniciar el Form
        setReserva({
            persona: '',
            cantidad: '',
            fecha: '',
            hora: '',
            motivo: ''
        });
    }
    return (
        <Fragment>
            <h2>Crear Reserva</h2>
            {error? <p className="alerta-error">Completar todos los campos!!</p> : null }
            <form
            onSubmit={submitReserva}
            >
                <label htmlFor="">Nombre Reservante</label>
                <input
                    type="text"
                    name="persona"
                    className="u-full-width"
                    placeholder="Nombre Persona"
                    onChange={actualizarState}
                    value={persona}
                />
                <label htmlFor="">Cantidad Personas</label>
                <input
                    type="number"
                    name="cantidad"
                    className="u-full-width"
                    placeholder="Cantidad de Personas"
                    onChange={actualizarState}
                    value={cantidad}
                />

                <label htmlFor="">Fecha Reserva</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label htmlFor="">Hora Reserva</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label htmlFor="">Motivo</label>
                <textarea name="motivo" 
                    className="u-full-width"
                    onChange={actualizarState}
                    value={motivo}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                > Agregar Reserva</button>
            </form>

        </Fragment>
     );
}
// documentar los componetes con PropTypes, la siguiente forma:
Formulario.propTypes  = {
    crearReserva: PropTypes.func.isRequired
}

export default Formulario;