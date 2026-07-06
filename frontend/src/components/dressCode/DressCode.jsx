import OrnamentoHoja from '../OrnamentoHoja';
import './DressCode.css';

export default function DressCode({ dressCodeMujeres, dressCodeHombres }) {
    return (
        <section className="tarjeta-seccion tarjeta-seccion--clara">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-titulo">Dress Code</p>

            <div className="dresscode-bloque">
                <p className="dresscode-genero">Mujeres</p>
                <p className="dresscode-texto">{dressCodeMujeres}</p>
            </div>

            <div className="dresscode-bloque">
                <p className="dresscode-genero">Hombres</p>
                <p className="dresscode-texto">{dressCodeHombres}</p>
            </div>
        </section>
    );
}