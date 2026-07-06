import OrnamentoHoja from '../OrnamentoHoja';
import './InvitacionPalabras.css';

export default function InvitacionPalabras({ texto, autor, nombresNovios }) {
    return (
        <section className="tarjeta-seccion tarjeta-seccion--oscura">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="palabras-script">{nombresNovios}</p>

            <p className="palabras-texto">"{texto}"</p>
            {autor && <p className="palabras-autor">— {autor}</p>}
        </section>
    );
}