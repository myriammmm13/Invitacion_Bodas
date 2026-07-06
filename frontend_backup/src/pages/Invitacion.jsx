import { useEffect, useState } from 'react';
import client from '../api/client';
import Portada from '../components/Portada';
import Contador from '../components/Contador';

export default function Invitacion() {
    const [evento, setEvento] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        client.get('/api/evento')
            .then(res => setEvento(res.data))
            .catch(err => console.error('Error cargando configuración del evento', err))
            .finally(() => setCargando(false));
    }, []);

    if (cargando) return <div className="cargando">Cargando invitación...</div>;
    if (!evento) return <div className="error">No se pudo cargar la invitación.</div>;

    return (
        <Portada cancionUrl={evento.cancionUrl}>
            <div className="invitacion-scroll">
                <Contador fechaBoda={evento.fechaHoraBoda} />
                {/* Aquí seguirán, en orden: BuscarInvitado, DressCode, Itinerario, Ubicaciones, AgendarCalendario, QRFotos */}
            </div>
        </Portada>
    );
}