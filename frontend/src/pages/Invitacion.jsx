import { useEffect, useState } from 'react';
import client from '../api/client';
import Portada from '../components/Portada/Portada';
import InvitacionPalabras from '../components/InvitacionPalabras/InvitacionPalabras';
import Contador from '../components/Contador/Contador';
import AgendarCalendario from '../components/agendar/AgendarCalendario';
import Recepcion from '../components/recepcion/Recepcion';
import ConfirmacionAsistencia from '../components/confirmacion/ConfirmacionAsistencia';
import CollageFotos from '../components/collage/CollageFotos';
import Regalos from '../components/regalos/Regalos';
import DressCode from '../components/dressCode/DressCode';
import Itinerario from '../components/Itinerario/Itinerario';
import QRFotos from '../components/qr/QRFotos';

function formatearHoraSimple(horaArray) {
    if (!horaArray) return '';
    const [h, m] = horaArray;
    const periodo = h >= 12 ? 'pm' : 'am';
    const hora12 = h % 12 === 0 ? 12 : h % 12;
    return `${hora12}:${String(m).padStart(2, '0')} ${periodo}`;
}

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
        <Portada cancionUrl={evento.cancionUrl} nombresNovios="Tiana & Carlitos">
            <InvitacionPalabras
                texto={evento.textoInvitacion}
                autor={evento.autorFrase}
                nombresNovios="Tiana & Carlitos"
            />

            <Contador fechaBoda={evento.fechaHoraBoda} />

            <AgendarCalendario
                fechaBoda={evento.fechaHoraBoda}
                direccionRecepcion={evento.direccionRecepcion}
                nombresNovios="Tiana & Carlitos"
            />

            <Recepcion
                direccion={evento.direccionRecepcion}
                horaRecepcion={formatearHoraSimple(evento.horaRecepcion)}
                linkMaps={evento.linkMapsRecepcion}
            />

            <ConfirmacionAsistencia />

            <CollageFotos />

            <Regalos sinpe={evento.sinpe} iban={evento.iban} />

            <DressCode
                dressCodeMujeres={evento.dressCodeMujeres}
                dressCodeHombres={evento.dressCodeHombres}
            />

            <Itinerario />

            <QRFotos linkForm={evento.linkFormFotos} />
        </Portada>
    );
}