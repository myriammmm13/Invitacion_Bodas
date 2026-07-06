import { useState } from 'react';
import client from '../../api/client';
import OrnamentoHoja from '../OrnamentoHoja';
import './ConfirmacionAsistencia.css';

export default function ConfirmacionAsistencia() {
    const [nombre, setNombre] = useState('');
    const [resultados, setResultados] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    const [asisteInvitado, setAsisteInvitado] = useState(null);
    const [asisteAcompanante, setAsisteAcompanante] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState('');

    const buscar = async () => {
        setError('');
        setSeleccionado(null);
        if (nombre.trim().length < 3) {
            setError('Escribe al menos 3 letras de tu nombre.');
            return;
        }
        try {
            const res = await client.get('/api/invitados/buscar', { params: { nombre } });
            setResultados(res.data);
            if (res.data.length === 0) setError('No encontramos ese nombre en la lista de invitados.');
        } catch {
            setError('Ocurrió un error al buscar. Intenta de nuevo.');
        }
    };

    const confirmar = async () => {
        try {
            await client.put(`/api/invitados/${seleccionado.id}/confirmar`, {
                asisteInvitado,
                asisteAcompanante,
                mensaje,
            });
            setEnviado(true);
        } catch {
            setError('No se pudo enviar tu confirmación. Intenta de nuevo.');
        }
    };

    return (
        <section className="tarjeta-seccion tarjeta-seccion--clara">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-eyebrow">Confirma tu asistencia</p>

            {enviado ? (
                <p className="rsvp-gracias">¡Gracias por confirmar! Te esperamos.</p>
            ) : !seleccionado ? (
                <>
                    <p className="tarjeta-titulo" style={{ fontSize: '1.2rem' }}>
                        Escribe tu nombre y apellido
                    </p>
                    <input
                        className="rsvp-input"
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Nombre y apellido"
                    />
                    <button className="boton-dorado" onClick={buscar}>Buscar</button>

                    {error && <p className="rsvp-error">{error}</p>}

                    {resultados.map(inv => (
                        <button
                            key={inv.id}
                            className="rsvp-resultado"
                            onClick={() => setSeleccionado(inv)}
                        >
                            {inv.nombreCompleto}
                        </button>
                    ))}
                </>
            ) : (
                <div className="rsvp-formulario">
                    <p className="rsvp-nombre-seleccionado">{seleccionado.nombreCompleto}</p>

                    <p className="rsvp-pregunta">¿Asistirás?</p>
                    <div className="rsvp-botones-si-no">
                        <button
                            className={asisteInvitado === true ? 'rsvp-opcion rsvp-opcion--activa' : 'rsvp-opcion'}
                            onClick={() => setAsisteInvitado(true)}
                        >Sí</button>
                        <button
                            className={asisteInvitado === false ? 'rsvp-opcion rsvp-opcion--activa' : 'rsvp-opcion'}
                            onClick={() => setAsisteInvitado(false)}
                        >No</button>
                    </div>

                    {asisteInvitado && seleccionado.tieneAcompanante && (
                        <>
                            <p className="rsvp-pregunta">
                                ¿Tu acompañante{seleccionado.nombreAcompanante ? ` (${seleccionado.nombreAcompanante})` : ''} también asistirá?
                            </p>
                            <div className="rsvp-botones-si-no">
                                <button
                                    className={asisteAcompanante === true ? 'rsvp-opcion rsvp-opcion--activa' : 'rsvp-opcion'}
                                    onClick={() => setAsisteAcompanante(true)}
                                >Sí</button>
                                <button
                                    className={asisteAcompanante === false ? 'rsvp-opcion rsvp-opcion--activa' : 'rsvp-opcion'}
                                    onClick={() => setAsisteAcompanante(false)}
                                >No</button>
                            </div>
                        </>
                    )}

                    {asisteInvitado !== null && (
                        <>
                            <p className="rsvp-pregunta">Envíanos un mensaje</p>
                            <textarea
                                className="rsvp-textarea"
                                value={mensaje}
                                onChange={e => setMensaje(e.target.value)}
                                placeholder="Escribe tu mensaje de felicitación"
                            />
                            <button className="boton-dorado" onClick={confirmar}>Confirmar</button>
                        </>
                    )}

                    {error && <p className="rsvp-error">{error}</p>}
                </div>
            )}
        </section>
    );
}