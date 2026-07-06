import OrnamentoHoja from '../OrnamentoHoja';
import './AgendarCalendario.css';

function formatearFechaGoogle(fechaISO) {
    // Convierte "2027-01-30T13:00:00" a "20270130T130000"
    return fechaISO.replace(/[-:]/g, '').split('.')[0];
}

export default function AgendarCalendario({ fechaBoda, direccionRecepcion, nombresNovios }) {
    const inicio = formatearFechaGoogle(fechaBoda);
    // Duración estimada de 6 horas para el evento completo
    const finDate = new Date(new Date(fechaBoda).getTime() + 6 * 60 * 60 * 1000);
    const fin = formatearFechaGoogle(finDate.toISOString());

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(`Boda de ${nombresNovios}`)}` +
        `&dates=${inicio}/${fin}` +
        `&location=${encodeURIComponent(direccionRecepcion || '')}` +
        `&details=${encodeURIComponent('No olvides acompañarnos en este día tan especial.')}`;

    return (
        <section className="tarjeta-seccion tarjeta-seccion--clara">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-eyebrow">No lo olvides</p>
            <p className="tarjeta-titulo">Guarda la fecha</p>

            <a href={url} target="_blank" rel="noopener noreferrer" className="boton-dorado">
                Agregar a Google Calendar
            </a>
        </section>
    );
}