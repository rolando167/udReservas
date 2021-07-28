import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/formulario";
import Reserva from "./components/reserva";

function App() {

	//Reservas en LocalStorage
	let reservasIniciales = JSON.parse(localStorage.getItem('reservas'));
	if(!reservasIniciales) {
		reservasIniciales = [];
	}

	//Arreglo de Reservas
	const [reservas, setReservas] = useState([]);

	//useEffect para realizar ciertas operaciones cuando el state cambia
	useEffect(() =>{
		if(reservasIniciales){
			localStorage.setItem('reservas',JSON.stringify(reservas) );
		}else{
			localStorage.setItem('reservas',JSON.stringify([]) );
		}
	}, [reservas, reservasIniciales]); // para que se ejecute SOLO cuando hay cambio en reserva

	// Funcion que tome las reservas actuales y agrege la nueva
	const crearReserva = (reserva) => {
		setReservas([
			...reservas
			, reserva
		]);
		// console.log(reservas);
	}

	//Funcion que eliminar una Reserva pro su ID
	const eliminarReserva = (id) =>{
		const nuevasReservas = reservas.filter(reserva => reserva.id !== id);
		setReservas(nuevasReservas);
	}

	//Mensaje condicional
	const tituloReservas = reservas.length === 0? 'No hay Reservas' : 'Administra Reserva';

	return (
		<Fragment>
			 <h1>Administración de Reservas</h1>
			 <div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario
						crearReserva={crearReserva}
						/>
					</div>
					<div className="one-half column">
						<h2>{tituloReservas} - {reservas.length}</h2>
						 {
							reservas.map(reserva => (
								<Reserva
								key={reserva.id}
								reserva={reserva}
								eliminarReserva = {eliminarReserva}
								/>
							))
						 }
					</div>
				</div>
			 </div>
		</Fragment>
	);
}

export default App;
