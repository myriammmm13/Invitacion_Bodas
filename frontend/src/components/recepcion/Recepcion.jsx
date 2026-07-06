import OrnamentoHoja from '../OrnamentoHoja';
import './Recepcion.css';

export default function Recepcion({ direccion, horaRecepcion, linkMaps }) {
    return (
        <section className="tarjeta-seccion tarjeta-seccion--oscura">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-eyebrow">Recepción</p>
            <p className="tarjeta-titulo">{direccion}</p>

            <p className="recepcion-texto">
                Nos encantaría que formaras parte de la celebración de nuestro matrimonio.
            </p>

            <p className="recepcion-hora">{horaRecepcion}</p>

            {linkMaps && (
                <a href={linkMaps} target="_blank" rel="noopener noreferrer" className="boton-outline">
                    ¿Cómo llegar?
                </a>
            )}
        </section>
    );
}