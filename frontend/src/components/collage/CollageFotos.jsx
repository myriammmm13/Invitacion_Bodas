import OrnamentoHoja from '../OrnamentoHoja';
import './CollageFotos.css';

export default function CollageFotos({ fotos = ['/fotos/foto1.jpg', '/fotos/foto2.jpg', '/fotos/foto3.jpg'] }) {
    return (
        <section className="tarjeta-seccion tarjeta-seccion--clara">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <div className="collage-grid">
                {fotos.map((src, i) => (
                    <img key={i} src={src} alt={`Foto ${i + 1} de la pareja`} className="collage-foto" />
                ))}
            </div>
        </section>
    );
}