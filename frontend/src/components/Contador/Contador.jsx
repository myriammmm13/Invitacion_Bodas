import useContadorRegresivo from '../../hooks/useContadorRegresivo';
import OrnamentoHoja from '../OrnamentoHoja';
import './Contador.css';

export default function Contador({ fechaBoda }) {
    const { dias, horas, minutos } = useContadorRegresivo(fechaBoda);

    return (
        <section className="tarjeta-seccion tarjeta-seccion--clara">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="contador-cita">
                "Yo no nací sino para quereros; mi alma os ha cortado a su medida."
            </p>
            <p className="contador-autor">— Garcilaso de la Vega</p>

            <p className="tarjeta-eyebrow" style={{ marginTop: 40 }}>Falta poco...</p>

            <div className="contador-grid">
                <div className="contador-caja">
                    <span className="contador-numero">{dias}</span>
                    <span className="contador-etiqueta">días</span>
                </div>
                <div className="contador-caja">
                    <span className="contador-numero">{horas}</span>
                    <span className="contador-etiqueta">horas</span>
                </div>
                <div className="contador-caja">
                    <span className="contador-numero">{minutos}</span>
                    <span className="contador-etiqueta">min</span>
                </div>
            </div>
        </section>
    );
}