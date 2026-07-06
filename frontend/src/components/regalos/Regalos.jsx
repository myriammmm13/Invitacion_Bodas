import OrnamentoHoja from '../OrnamentoHoja';
import './Regalos.css';

export default function Regalos({ sinpe, iban }) {
    return (
        <section className="tarjeta-seccion tarjeta-seccion--oscura">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-eyebrow">Regalos</p>
            <p className="regalos-texto">
                Tu presencia es lo más importante. Si deseas contribuir, tu regalo por
                Sinpe o transferencia nos ayudará a crear recuerdos inolvidables en
                nuestra luna de miel.
            </p>

            <div className="regalos-caja">
                {iban && <p>IBAN: {iban}</p>}
                {sinpe && <p>Sinpe Móvil: {sinpe}</p>}
            </div>

            <p className="regalos-gracias">¡Gracias!</p>
        </section>
    );
}